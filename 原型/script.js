/* =========================================================
   拾光匣 · Minimal App
   ========================================================= */

const ITEMS = [
  {
    id: "001",
    title: "火星演唱会 · 上海站",
    kind: "concert",
    kindLabel: "演出",
    date: "2024 / 08 / 17",
    place: "上海",
    mood: 95,
    cover: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "那是 2024 年最热的一个夏天。我们凌晨两点就起床排队，排队的时候被旁边的姐姐送了两瓶冰水。",
      "她唱到第三首《我的歌》的时候，整个场馆亮起了一万根荧光棒，像一片没有风的麦田。",
      "散场之后我们在路边吃了一碗凉面。凌晨四点的上海，路上只有我们。",
    ],
    note: "她说：这是我第三次来听你唱歌，谢谢你还在唱。",
  },
  {
    id: "002",
    title: "老电影票根 · 大光明",
    kind: "ticket",
    kindLabel: "票根",
    date: "2015 / 11 / 02",
    place: "上海",
    mood: 80,
    cover: "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1485095329183-d0797cdc5676?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "《花样年华》重映。坐在 4 排 7 座，旁边那个男人从头哭到尾。",
      "我也没忍住。",
    ],
    note: "梁朝伟的领带，张曼玉的旗袍，是真的会被时间留下来的东西。",
  },
  {
    id: "003",
    title: "初音未来手办",
    kind: "figure",
    kindLabel: "手办",
    date: "2018 / 07 / 21",
    place: "上海",
    mood: 88,
    cover: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551103781-e3abd6aae5f3?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "省了两个月的早餐钱。拿到手办的那一刻手在抖。",
      "现在放在书柜最中间一层，每天早上会先看她一眼再开始工作。",
    ],
    note: "我的第一件「贵重物品」。",
  },
  {
    id: "004",
    title: "京都的秋天",
    kind: "photo",
    kindLabel: "照片",
    date: "2017 / 11 / 14",
    place: "京都",
    mood: 92,
    cover: "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1493997181344-712f2f19d87a?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478436127897-769e1538f1a2?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "第一次出国。以为会兴奋到睡不着，结果下飞机的第一件事是找厕所。",
      "岚山的红叶烧得像一场安静的火灾。",
    ],
    note: "从此变成一个对秋天有执念的人。",
  },
  {
    id: "005",
    title: "迪士尼城堡烟火",
    kind: "ticket",
    kindLabel: "票根",
    date: "2023 / 02 / 14",
    place: "香港",
    mood: 90,
    cover: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597466765990-64ad1c35dafc?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "情人节。第一次和她一起去游乐园。",
      "烟花升起来的时候，她突然说「以后每年都来一次好不好」。",
    ],
    note: "我们做到了。这是第三年。",
  },
  {
    id: "006",
    title: "草莓音乐节",
    kind: "concert",
    kindLabel: "演出",
    date: "2022 / 05 / 03",
    place: "北京",
    mood: 87,
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "下着毛毛雨。她在我旁边哭得稀里哗啦，我举着手电筒帮后排的人打灯。",
      "那种疲惫、潮湿、被音乐击穿的感觉，原来叫「青春」。",
    ],
    note: "新裤子压轴。我们从下午三点站到晚上十点。",
  },
  {
    id: "007",
    title: "老式胶片相机",
    kind: "figure",
    kindLabel: "手办",
    date: "2019 / 06 / 12",
    place: "杭州",
    mood: 78,
    cover: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606986628253-49a1f1cb4c8a?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "在一个下雨的下午，从一个白胡子老爷爷那里买下的。",
      "他说这台机子跟了他四十年。",
    ],
    note: "快门声像一记很轻的吻。",
  },
  {
    id: "008",
    title: "海边的手写信",
    kind: "note",
    kindLabel: "手写",
    date: "2020 / 08 / 22",
    place: "厦门",
    mood: 96,
    cover: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "她用海螺换了这张明信片。",
      "信里说：「你以后要记得，22 岁的夏天我们一起在海边睡着了，没有蚊子咬我。」",
    ],
    note: "那天的风是咸的。",
  },
  {
    id: "009",
    title: "故宫博物院门票",
    kind: "ticket",
    kindLabel: "票根",
    date: "2019 / 12 / 30",
    place: "北京",
    mood: 70,
    cover: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "那年北京下了五十年最大的一场雪。",
      "红墙、金瓦、白雪，像跌进了一幅画。",
    ],
    note: "在御花园摔了一跤，相机差点报废。",
  },
  {
    id: "010",
    title: "极地海洋馆门票",
    kind: "ticket",
    kindLabel: "票根",
    date: "2021 / 10 / 04",
    place: "上海",
    mood: 75,
    cover: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "白鲸会笑。真的会笑。",
      "看完白鲸表演我在出口哭了一场。",
    ],
    note: "它们不记得我，但我会一直记得它们。",
  },
  {
    id: "011",
    title: "冰岛极光夜",
    kind: "photo",
    kindLabel: "照片",
    date: "2018 / 01 / 09",
    place: "冰岛",
    mood: 99,
    cover: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1200&q=85&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "零下 28 度。手冻得举不动相机。",
      "那一夜是绿的。整个天都是绿的。",
    ],
    note: "宇宙有时候真的很偏心。",
  },
  {
    id: "012",
    title: "《大话西游》重映",
    kind: "ticket",
    kindLabel: "票根",
    date: "2014 / 04 / 01",
    place: "广州",
    mood: 82,
    cover: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=900&q=80&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1200&q=85&auto=format&fit=crop",
    ],
    desc: [
      "紫霞眨眼的那一秒，全场都安静了。",
      "散场的时候下起大雨，没带伞。",
    ],
    note: "我的第一张电影票。",
  },
];

const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

const state = { filter: "all", view: "archive", grid: 3, currentItem: null };

/* ---------------- View switching ---------------- */
function switchView(name) {
  state.view = name;
  $$(".view").forEach((v) => v.classList.toggle("is-active", v.dataset.view === name));
  $$(".tab").forEach((b) => b.classList.toggle("is-active", b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
$$(".tab").forEach((b) => b.addEventListener("click", () => switchView(b.dataset.view)));
$$("[data-jump]").forEach((b) => b.addEventListener("click", () => switchView(b.dataset.jump)));

/* ---------------- Filter ---------------- */
$$(".chip").forEach((c) => {
  c.addEventListener("click", () => {
    $$(".chip").forEach((x) => x.classList.remove("is-active"));
    c.classList.add("is-active");
    state.filter = c.dataset.filter;
    renderArchive();
  });
});

/* ---------------- Grid toggle ---------------- */
$$(".vbtn").forEach((b) => {
  b.addEventListener("click", () => {
    $$(".vbtn").forEach((x) => x.classList.remove("is-active"));
    b.classList.add("is-active");
    state.grid = parseInt(b.dataset.grid, 10);
    const grid = $("#archiveGrid");
    grid.classList.remove("is-2", "is-3", "is-4");
    grid.classList.add(`is-${state.grid}`);
  });
});

/* ---------------- Render archive ---------------- */
function visibleItems() {
  return state.filter === "all" ? ITEMS : ITEMS.filter((i) => i.kind === state.filter);
}

function cardHTML(item, i) {
  return `
    <article class="card" data-id="${item.id}" style="animation-delay:${i * 50}ms">
      <div class="card__image">
        <span class="card__no">Nº ${item.id}</span>
        <button class="card__more" aria-label="更多">
          <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <circle cx="5" cy="12" r="1.6"/>
            <circle cx="12" cy="12" r="1.6"/>
            <circle cx="19" cy="12" r="1.6"/>
          </svg>
        </button>
        <img src="${item.cover}" alt="${item.title}" loading="lazy" />
      </div>
      <div class="card__body">
        <h3 class="card__title">${item.title}</h3>
        <div class="card__sub">
          <span>${item.kindLabel}</span>
          <span class="card__dot"></span>
          <em>${item.date.replace(/\s/g, "")}</em>
          <span class="card__dot"></span>
          <span>${item.place}</span>
        </div>
      </div>
    </article>
  `;
}

function renderArchive() {
  const grid = $("#archiveGrid");
  const items = visibleItems();
  grid.innerHTML = items.map(cardHTML).join("");
  $("#totalCount").textContent = `${items.length} 件 · ${
    state.filter === "all" ? "全部" : $(".chip.is-active").textContent.trim().split(" ")[0]
  }`;
  $$(".card", grid).forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".card__more")) return;
      const item = ITEMS.find((i) => i.id === card.dataset.id);
      if (item) openDetail(item);
    });
  });
}

/* ---------------- Detail ---------------- */
function detailHTML(item) {
  return `
    <div class="d-gallery">
      <div class="d-hero">
        <img id="dHeroImg" src="${item.images[0]}" alt="${item.title}" />
      </div>
      ${
        item.images.length > 1
          ? `<div class="d-thumbs">
              ${item.images
                .map(
                  (src, idx) => `
                <div class="d-thumb ${idx === 0 ? "is-active" : ""}" data-idx="${idx}">
                  <img src="${src}" alt="" />
                </div>
              `
                )
                .join("")}
            </div>`
          : ""
      }
    </div>

    <div class="d-info">
      <span class="d-tag">${item.kindLabel} · 馆藏 ${item.id}</span>
      <h1 class="d-title">${item.title}</h1>

      <div class="d-meta">
        <div class="d-meta-item">
          <span class="lbl">收藏日期</span>
          <span class="val">${item.date}</span>
        </div>
        <div class="d-meta-item">
          <span class="lbl">地点</span>
          <span class="val">${item.place}</span>
        </div>
        <div class="d-meta-item">
          <span class="lbl">心动</span>
          <span class="val">${item.mood} / 100</span>
        </div>
      </div>

      <div class="d-body">
        ${item.desc.map((p) => `<p>${p}</p>`).join("")}
      </div>

      ${
        item.note
          ? `<div class="d-note">
              <span class="d-note-label">当时手记</span>
              <p class="d-note-text">${item.note}</p>
            </div>`
          : ""
      }

      <div class="d-footer">
        <span>${item.images.length} 张照片</span>
        <div class="d-actions">
          <button class="btn-ghost">编辑</button>
          <button class="btn-ghost">分享</button>
        </div>
      </div>
    </div>
  `;
}

function openDetail(item) {
  state.currentItem = item;
  $("#modalContent").innerHTML = detailHTML(item);
  $("#modal").classList.add("is-open");
  document.body.style.overflow = "hidden";
  $$(".d-thumb").forEach((t) => {
    t.addEventListener("click", () => {
      $$(".d-thumb").forEach((x) => x.classList.remove("is-active"));
      t.classList.add("is-active");
      $("#dHeroImg").style.opacity = 0;
      setTimeout(() => {
        $("#dHeroImg").src = t.querySelector("img").src;
        $("#dHeroImg").style.opacity = 1;
      }, 150);
    });
  });
}

function closeDetail() {
  $("#modal").classList.remove("is-open");
  document.body.style.overflow = "";
  state.currentItem = null;
}

$$("[data-close]").forEach((el) => el.addEventListener("click", closeDetail));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && $("#modal").classList.contains("is-open")) closeDetail();
});

/* ---------------- Timeline ---------------- */
function renderTimeline() {
  const tl = $("#timeline");
  const items = [...ITEMS].sort((a, b) => (a.date < b.date ? 1 : -1));
  tl.innerHTML = items
    .map(
      (item) => `
    <article class="tl-item" data-id="${item.id}">
      <div class="tl-year">${item.date.split(" / ")[0]}</div>
      <div class="tl-content">
        <div class="tl-image"><img src="${item.cover}" alt="${item.title}" /></div>
        <div class="tl-info">
          <h3 class="tl-title">${item.title}</h3>
          <div class="tl-meta">
            <span>${item.kindLabel}</span>
            <span class="card__dot"></span>
            <em>${item.date}</em>
          </div>
          <p class="tl-desc">${item.desc[0]}</p>
        </div>
      </div>
    </article>
  `
    )
    .join("");
  $$(".tl-item").forEach((el) => {
    el.addEventListener("click", () => {
      const item = ITEMS.find((i) => i.id === el.dataset.id);
      if (item) openDetail(item);
    });
  });
}

/* ---------------- Form ---------------- */
const dropzone = $("#dropzone");
const fileInput = $("#fileInput");
const previews = $("#previews");

dropzone.addEventListener("click", (e) => { if (!e.target.closest(".preview")) fileInput.click(); });
["dragenter", "dragover"].forEach((ev) =>
  dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.add("is-drag"); })
);
["dragleave", "drop"].forEach((ev) =>
  dropzone.addEventListener(ev, (e) => { e.preventDefault(); dropzone.classList.remove("is-drag"); })
);
dropzone.addEventListener("drop", (e) => {
  handleFiles(Array.from(e.dataTransfer.files || []).filter((f) => f.type.startsWith("image/")));
});
fileInput.addEventListener("change", (e) => handleFiles(Array.from(e.target.files)));

function handleFiles(files) {
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const div = document.createElement("div");
      div.className = "preview";
      div.innerHTML = `<img src="${ev.target.result}" alt="" /><button class="preview__rm" type="button">✕</button>`;
      div.querySelector(".preview__rm").addEventListener("click", (e) => { e.stopPropagation(); div.remove(); });
      previews.appendChild(div);
    };
    reader.readAsDataURL(file);
  });
}

$("#addForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = "已保存 ✓";
  setTimeout(() => (btn.textContent = orig), 1800);
});

/* ---------------- Init ---------------- */
renderArchive();
renderTimeline();
