// ======== 1) 縣市與中心座標（可自行增減/調整）========
const CITIES = [
  { id: "taipei",   name: "台北市",    center: { lat: 25.0330, lng: 121.5654 } },
  { id: "ntpc",     name: "新北市",    center: { lat: 25.0169, lng: 121.4628 } },
  { id: "taoyuan",  name: "桃園市",    center: { lat: 24.9937, lng: 121.3009 } },
  { id: "hsinchu",  name: "新竹市",    center: { lat: 24.8039, lng: 120.9647 } },
  { id: "taichung", name: "台中市",    center: { lat: 24.1477, lng: 120.6736 } },
  { id: "tainan",   name: "台南市",    center: { lat: 22.9999, lng: 120.2270 } },
  { id: "kaohsiung",name: "高雄市",    center: { lat: 22.6273, lng: 120.3014 } },
  { id: "hualien",  name: "花蓮縣",    center: { lat: 23.9872, lng: 121.6016 } },
  { id: "taitung",  name: "台東縣",    center: { lat: 22.7583, lng: 121.1440 } },
  { id: "chiayi",   name: "嘉義市",    center: { lat: 23.4801, lng: 120.4491 } },
];

// ======== 2) 各縣市餐廳示範資料（請替換成你的名單）========
// 提醒：以下餐廳名稱多為「示範名稱」，避免誤導，請改成你實際推薦的店與正確座標/連結。
const DATA = {
  taipei: [
    {
      id: "tpe-1",
      name: "台北示範牛肉麵",
      category: "中式",
      price: "$$",
      address: "台北市中正區某路 100 號",
      phone: "",
      coords: { lat: 25.0323, lng: 121.5650 },
      openingHours: ["每日 11:00–21:00"],
      tags: ["牛肉麵", "小菜"],
      menuUrl: "",
      orderUrl: "",
      website: "",
    },
    {
      id: "tpe-2",
      name: "信義義大利麵館（示範）",
      category: "義式",
      price: "$$$",
      address: "台北市信義區某街 12 號",
      phone: "",
      coords: { lat: 25.0339, lng: 121.5670 },
      openingHours: ["一–日 11:30–22:00"],
      tags: ["義大利麵", "燉飯", "甜點"],
      menuUrl: "",
      orderUrl: "",
      website: "",
    },
    {
      id: "tpe-3",
      name: "東區丼飯（示範）",
      category: "日式",
      price: "$$",
      address: "台北市大安區某巷 5 號",
      phone: "",
      coords: { lat: 25.0414, lng: 121.5460 },
      openingHours: ["每日 12:00–21:30"],
      tags: ["丼飯", "味噌湯"],
      menuUrl: "",
      orderUrl: "",
      website: "",
    },
  ],
  ntpc: [
    { id:"nt-1", name:"板橋小籠湯包（示範）", category:"中式", price:"$$",
      address:"新北市板橋區某路 8 號", phone:"",
      coords:{ lat:25.0136, lng:121.4639 }, openingHours:["每日 11:00–21:00"],
      tags:["小籠包","湯麵"], menuUrl:"", orderUrl:"", website:"" },
    { id:"nt-2", name:"新店越南河粉（示範）", category:"東南亞", price:"$",
      address:"新北市新店區某街 88 號", phone:"",
      coords:{ lat:24.9678, lng:121.5416 }, openingHours:["一–日 11:00–21:00"],
      tags:["河粉","生春捲"], menuUrl:"", orderUrl:"", website:"" },
  ],
  taoyuan: [
    { id:"ty-1", name:"桃園客家小館（示範）", category:"客家", price:"$$",
      address:"桃園市桃園區某路 77 號", phone:"",
      coords:{ lat:24.9935, lng:121.2960 }, openingHours:["一–日 11:00–21:00"],
      tags:["客家小炒","湯品"], menuUrl:"", orderUrl:"", website:"" },
    { id:"ty-2", name:"中原夜市鹽酥雞（示範）", category:"小吃", price:"$",
      address:"桃園市中壢區某巷 5 號", phone:"",
      coords:{ lat:24.9572, lng:121.2416 }, openingHours:["傍晚–深夜"],
      tags:["炸物","宵夜"], menuUrl:"", orderUrl:"", website:"" },
  ],
  hsinchu: [
    { id:"hsz-1", name:"城隍廟米粉（示範）", category:"小吃", price:"$",
      address:"新竹市北區某街 1 號", phone:"",
      coords:{ lat:24.8046, lng:120.9682 }, openingHours:["一–日 10:30–20:30"],
      tags:["米粉","貢丸湯"], menuUrl:"", orderUrl:"", website:"" },
    { id:"hsz-2", name:"科學園區便當（示範）", category:"台式", price:"$",
      address:"新竹市東區某路 9 號", phone:"",
      coords:{ lat:24.7806, lng:121.0120 }, openingHours:["平日 11:00–14:00 / 17:00–20:00"],
      tags:["便當","快餐"], menuUrl:"", orderUrl:"", website:"" },
  ],
  taichung: [
    { id:"tc-1", name:"勤美咖哩（示範）", category:"日式", price:"$$",
      address:"台中市西區某路 22 號", phone:"",
      coords:{ lat:24.1517, lng:120.6620 }, openingHours:["一–日 11:30–21:00"],
      tags:["咖哩","炸豬排"], menuUrl:"", orderUrl:"", website:"" },
    { id:"tc-2", name:"逢甲夜市滷味（示範）", category:"小吃", price:"$",
      address:"台中市西屯區某巷 3 號", phone:"",
      coords:{ lat:24.1789, lng:120.6467 }, openingHours:["傍晚–深夜"],
      tags:["滷味","宵夜"], menuUrl:"", orderUrl:"", website:"" },
  ],
  tainan: [
    { id:"tn-1", name:"國華街牛肉湯（示範）", category:"台南小吃", price:"$$",
      address:"台南市中西區某路 10 號", phone:"",
      coords:{ lat:22.9979, lng:120.1970 }, openingHours:["清晨–中午"],
      tags:["牛肉湯","肉燥飯"], menuUrl:"", orderUrl:"", website:"" },
    { id:"tn-2", name:"赤崁小卷米粉（示範）", category:"海鮮", price:"$$",
      address:"台南市中西區某街 88 號", phone:"",
      coords:{ lat:22.9989, lng:120.2030 }, openingHours:["一–日 11:00–20:00"],
      tags:["小卷","米粉"], menuUrl:"", orderUrl:"", website:"" },
  ],
  kaohsiung: [
    { id:"kh-1", name:"鹽埕燒肉丼（示範）", category:"日式", price:"$$",
      address:"高雄市鹽埕區某路 66 號", phone:"",
      coords:{ lat:22.6279, lng:120.2840 }, openingHours:["一–日 11:30–21:00"],
      tags:["丼飯","烤肉"], menuUrl:"", orderUrl:"", website:"" },
    { id:"kh-2", name:"瑞豐夜市地瓜球（示範）", category:"小吃", price:"$",
      address:"高雄市鼓山區某街 5 號", phone:"",
      coords:{ lat:22.6646, lng:120.3040 }, openingHours:["傍晚–深夜"],
      tags:["甜點","炸物"], menuUrl:"", orderUrl:"", website:"" },
  ],
  hualien: [
    { id:"hl-1", name:"花蓮扁食（示範）", category:"小吃", price:"$",
      address:"花蓮市某路 20 號", phone:"",
      coords:{ lat:23.9822, lng:121.6030 }, openingHours:["一–日 10:30–20:30"],
      tags:["扁食","湯品"], menuUrl:"", orderUrl:"", website:"" },
  ],
  taitung: [
    { id:"tt-1", name:"台東米台目（示範）", category:"小吃", price:"$",
      address:"台東市某路 3 號", phone:"",
      coords:{ lat:22.7548, lng:121.1446 }, openingHours:["一–日 10:30–20:30"],
      tags:["米台目","湯品"], menuUrl:"", orderUrl:"", website:"" },
  ],
  chiayi: [
    { id:"cy-1", name:"嘉義火雞肉飯（示範）", category:"小吃", price:"$",
      address:"嘉義市東區某路 1 號", phone:"",
      coords:{ lat:23.4810, lng:120.4520 }, openingHours:["一–日 10:00–20:00"],
      tags:["火雞肉飯","湯品"], menuUrl:"", orderUrl:"", website:"" },
  ],
};

// ======== 3) 下方是頁面邏輯（不需要改）========
const cityEl  = document.getElementById("city");
const qEl     = document.getElementById("q");
const catEl   = document.getElementById("cat");
const priceEl = document.getElementById("price");
const listEl  = document.getElementById("list");
const mapEl   = document.getElementById("mapFrame");

function mapEmbedUrl(coords) {
  return `https://www.google.com/maps?q=${coords.lat},${coords.lng}&z=15&output=embed`;
}
function mapPlaceSearchUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function renderCityOptions() {
  CITIES.forEach(c => {
    const opt = document.createElement("option");
    opt.value = c.id;
    opt.textContent = c.name;
    cityEl.appendChild(opt);
  });
}
function renderCategoryOptions(cityId) {
  // 先清空
  catEl.innerHTML = "";
  const all = document.createElement("option");
  all.value = "all"; all.textContent = "全部料理";
  catEl.appendChild(all);

  const items = DATA[cityId] || [];
  const set = new Set(items.map(r => r.category));
  Array.from(set).forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    catEl.appendChild(opt);
  });
}

function filteredRestaurants(cityId) {
  const list = DATA[cityId] || [];
  const q = (qEl.value || "").trim().toLowerCase();
  const c = catEl.value || "all";
  const p = priceEl.value || "all";
  return list.filter(r => {
    const text = [r.name, r.category, r.address, (r.tags||[]).join(" ")].join(" ").toLowerCase();
    const okQ = !q || text.includes(q);
    const okC = c === "all" || r.category === c;
    const okP = p === "all" || r.price === p;
    return okQ && okC && okP;
  });
}

function renderList(cityId) {
  const rows = filteredRestaurants(cityId);
  listEl.innerHTML = "";

  if (!rows.length) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "這個縣市目前沒有資料，請先加入幾間餐廳吧！";
    listEl.appendChild(empty);
    return;
  }

  rows.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    const row = document.createElement("div");
    row.className = "row";

    const left = document.createElement("div");
    left.innerHTML = `
      <div class="title">${r.name}</div>
      <div class="meta">
        <span>${r.category}</span>
        <span>${r.price}</span>
        <span>${r.address}</span>
      </div>
    `;

    const right = document.createElement("div");
    const mapBtn = document.createElement("button");
    mapBtn.className = "btn";
    mapBtn.textContent = "地圖";
    mapBtn.onclick = () => mapEl.src = mapEmbedUrl(r.coords);

    const gmap = document.createElement("a");
    gmap.className = "btn";
    gmap.textContent = "Google 地圖";
    gmap.href = mapPlaceSearchUrl(`${r.name} ${r.address}`);
    gmap.target = "_blank";

    right.appendChild(mapBtn);
    right.appendChild(gmap);
    row.appendChild(left);
    row.appendChild(right);

    const detail = document.createElement("div");
    detail.className = "meta";
    detail.innerHTML = `
      ${ (r.openingHours||[]).length ? `營業時間：${r.openingHours.join("； ")}` : "" }
      ${ r.phone ? `<br>電話：<a href="tel:${r.phone}">${r.phone}</a>` : "" }
    `;

    const tags = document.createElement("div");
    tags.className = "tags";
    (r.tags||[]).forEach(t => {
      const b = document.createElement("span");
      b.className = "tag";
      b.textContent = `#${t}`;
      tags.appendChild(b);
    });

    const btns = document.createElement("div");
    btns.className = "btns";
    if (r.menuUrl) {
      const a = document.createElement("a");
      a.className = "btn"; a.textContent = "菜單";
      a.href = r.menuUrl; a.target = "_blank";
      btns.appendChild(a);
    }
    if (r.orderUrl) {
      const a = document.createElement("a");
      a.className = "btn primary"; a.textContent = "點餐";
      a.href = r.orderUrl; a.target = "_blank";
      btns.appendChild(a);
    }
    if (r.website) {
      const a = document.createElement("a");
      a.className = "btn"; a.textContent = "官網";
      a.href = r.website; a.target = "_blank";
      btns.appendChild(a);
    }

    card.appendChild(row);
    card.appendChild(detail);
    card.appendChild(tags);
    card.appendChild(btns);
    listEl.appendChild(card);
  });
}

function init() {
  renderCityOptions();
  // 預設選第一個縣市
  const firstCity = CITIES[0].id;
  cityEl.value = firstCity;
  renderCategoryOptions(firstCity);
  mapEl.src = mapEmbedUrl(CITIES.find(c => c.id === firstCity).center);
  renderList(firstCity);

  // 綁定事件
  cityEl.addEventListener("change", () => {
    renderCategoryOptions(cityEl.value);
    mapEl.src = mapEmbedUrl(CITIES.find(c => c.id === cityEl.value).center);
    qEl.value = ""; priceEl.value = "all";
    renderList(cityEl.value);
  });
  qEl.addEventListener("input", () => renderList(cityEl.value));
  catEl.addEventListener("change", () => renderList(cityEl.value));
  priceEl.addEventListener("change", () => renderList(cityEl.value));
}

document.addEventListener("DOMContentLoaded", init);
