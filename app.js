import {PRODUCTS,SET,money,fullPrice,saving} from './data.js';
import {initCart,addItem} from './cart.js';
const grid=document.querySelector('#product-grid');
grid.innerHTML=PRODUCTS.map(p=>`<article class="product-card"><a class="product-image" href="product.html?id=${p.id}"><span>${p.number}</span><img src="${p.image}" alt="${p.name}"></a><div class="product-card-body"><span class="eyebrow">NUVIO / ${p.number}</span><h3>${p.name}</h3><p>${p.short}</p><div class="price"><strong>${money(p.price)}</strong>${p.oldPrice?`<s>${money(p.oldPrice)}</s><i>−${p.discount}%</i>`:''}</div><div class="card-actions"><a href="product.html?id=${p.id}" class="button light">Подробнее</a><button class="button dark" data-add="${p.id}" ${!p.price?'disabled':''}>В корзину</button></div></div></article>`).join('');
document.querySelector('[data-set-old]').textContent=money(fullPrice());document.querySelector('[data-set-price]').textContent=money(SET.price);document.querySelector('[data-set-saving]').textContent=saving()?`Экономия ${money(saving())}`:'Цена набора появится после подтверждения';
document.querySelector('#set-breakdown').innerHTML=PRODUCTS.map(p=>`<div><span>${p.name}</span><b>${money(p.price)}</b></div>`).join('')+`<div class="total"><span>Вместе отдельно</span><b>${money(fullPrice())}</b></div>`;
document.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>addItem(b.dataset.add));document.querySelector('[data-add-set]').onclick=()=>SET.price&&addItem(SET.id);
const menu=document.querySelector('.menu-button'),nav=document.querySelector('.mobile-nav');menu.onclick=()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))};nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
initCart();
