// Vercel Serverless Function — POST /api/chat -> Upstage Solar Pro
// Deploy v005 as Root Directory on Vercel and add UPSTAGE_API_KEY in Project Settings > Environment Variables.

const UPSTAGE_ENDPOINT = 'https://api.upstage.ai/v1/chat/completions';

function buildSystemPrompt(context = {}) {
  const lang = context.lang || 'ko';
  const langRule = lang === 'en'
    ? 'Reply in natural, concise English.'
    : lang === 'ja'
      ? 'Reply in natural, concise Japanese.'
      : 'Reply in natural, friendly, concise Korean.';

  return [
    'You are PILK AI Coach (Picture It Like Korean) — a witty, practical Korean photo-taking coach and local Korea travel guide.',
    langRule,
    'Keep every answer super concise and mobile-friendly (max 3–4 short bullet points or 3 sentences).',
    'Focus on real Korean photography tricks: holding the phone upside down (180° lens at bottom for longer legs), 0.5x ultra-wide high-angle, aligning shoes to the bottom frame line, extending front foot half a step, 10-second tips for a friend/passerby photographer, and nearby local cafes/spots.',
    `Current user context: Spot="${context.spotName || '성수 연무장길'}" (${context.spotArea || '서울'}), Active Pose="${context.poseName || '폰 거꾸로'}", Lens="${context.lens || '1×'}", Flip180=${context.flip180 ? 'ON' : 'OFF'}.`
  ].join('\n');
}

function buildDemoReply(userMsg = '', context = {}) {
  const lang = context.lang || 'ko';
  const spot = context.spotName || '성수 연무장길';
  const q = userMsg.toLowerCase();

  if (lang === 'en') {
    if (q.includes('rain') || q.includes('indoor')) {
      return `☔ Rainy day picks in Korea:\n• **The Hyundai Seoul (Sounds Forest)** — Bright skylight, try 0.5× from the upper railing!\n• **Seongsu Pop-up Showrooms** — Great full-length mirror selfies (angle 15°, front foot out).\n• **Starfield COEX Library** — Flip phone upside down for towering bookshelves.`;
    }
    if (q.includes('friend') || q.includes('10') || q.includes('explain')) {
      return `👥 Tell your photographer this (10s):\n1. Flip the phone upside down (lens at bottom).\n2. Put my shoes right on the bottom edge of the screen.\n3. Leave empty space above my head and tap 3 burst shots!`;
    }
    return `✨ Quick K-Shot tips for **${spot}**:\n• Hold your phone **upside down** (lens at bottom) at waist height.\n• Anchor your toes to the bottom line & step your front foot half a step forward.\n• Leave ~35% sky/background headroom for effortless Korean proportions!`;
  }

  if (lang === 'ja') {
    if (q.includes('雨') || q.includes('屋内')) {
      return `☔ 雨の日のおすすめ屋内スポット：\n• **ザ・現代ソウル（サウンズフォレスト）** — 明るい自然光、上階から0.5×広角が最高！\n• **聖水ショールーム** — 全身鏡で15°斜め＋前足出しセルフィー。\n• **COEXピョルマダン図書館** — スマホ逆さま持ちで迫力の縦構図。`;
    }
    if (q.includes('友達') || q.includes('10秒') || q.includes('説明')) {
      return `👥 撮ってくれる人への10秒指示：\n1. スマホを上下逆さま（レンズを下）に持って！\n2. つま先を画面の一番下の線に合わせて！\n3. 頭の上に余白を35%残して3枚連写して！`;
    }
    return `✨ **${spot}** の韓国式ベストカットコツ：\n• スマホを**上下逆さま（レンズ下）**にして腰の高さで撮影。\n• つま先を画面下端に合わせ、前足を半歩前に出す。\n• 頭上に35%の余白を残すと脚長＆おしゃれ比率に！`;
  }

  if (q.includes('비') || q.includes('실내')) {
    return `☔ 비 오는 날 한국 감성 실내 스팟 추천:\n• **더현대 서울 (사운즈 포레스트)** — 유리 천장 자연광! 위층 난간에서 0.5× 광각 추천\n• **성수·한남 쇼룸** — 전신거울 앞 15° 사선 + 앞발 빼기 거울셀카\n• **덕수궁 미술관 / 코엑스 별마당** — 폰 거꾸로(렌즈 아래)로 높은 층고 살리기`;
  }
  if (q.includes('친구') || q.includes('남자친구') || q.includes('10초') || q.includes('설명')) {
    return `👥 찍어주는 분께 딱 3가지만 말해보세요:\n1. "폰을 위아래로 거꾸로(렌즈가 아래로) 잡아줘!"\n2. "내 발끝을 화면 맨 아래 끝에 딱 맞춰줘!"\n3. "머리 위 배경 여백 남기고 3장만 연사해줘!"`;
  }
  return `✨ **${spot}** 한국인 감성 촬영 팁:\n• 스마트폰을 **거꾸로(렌즈가 아래로)** 잡아 배꼽 높이에서 찍으면 다리가 훨씬 길어 보여요.\n• 발끝을 하단 기준선에 맞추고 **앞발을 반 걸음** 앞으로 빼보세요.\n• 머리 위 배경 여백을 35% 남기면 잡지 화보 비율 완성!`;
}

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const messages = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
  const context = body.context || {};
  const lastUserMsg = [...messages].reverse().find(m => m.role === 'user')?.content || '';

  const apiKey = process.env.UPSTAGE_API_KEY;
  const model = process.env.UPSTAGE_MODEL || 'solar-pro';

  if (!apiKey || apiKey === 'up_your_api_key_here') {
    res.status(200).json({
      reply: buildDemoReply(lastUserMsg, context),
      model: 'demo',
      demo: true
    });
    return;
  }

  try {
    const upstream = await fetch(UPSTAGE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model,
        temperature: 0.7,
        max_tokens: 420,
        messages: [
          { role: 'system', content: buildSystemPrompt(context) },
          ...messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content || '').slice(0, 800) }))
        ]
      })
    });

    if (!upstream.ok) {
      const errText = await upstream.text();
      res.status(upstream.status).json({
        error: `Upstage API error (${upstream.status})`,
        detail: errText.slice(0, 200),
        reply: buildDemoReply(lastUserMsg, context),
        demo: true
      });
      return;
    }

    const data = await upstream.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || buildDemoReply(lastUserMsg, context);
    res.status(200).json({ reply, model, demo: false });
  } catch (err) {
    res.status(200).json({
      reply: buildDemoReply(lastUserMsg, context),
      model: 'demo-fallback',
      demo: true,
      error: err.message
    });
  }
}
