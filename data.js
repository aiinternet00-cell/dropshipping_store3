// ЕДИНСТВЕННОЕ МЕСТО ДЛЯ РЕДАКТИРОВАНИЯ ТОВАРОВ И ЦЕН.
// Данные поставщиков недоступны: замените поля ниже после подтверждения информации.
export const PRODUCTS = [
  { id:'product-1', number:'01', name:'Товар NUVIO 01', short:'Данные первого товара ожидают подтверждения.', description:'Ссылка на первый товар не была передана. Здесь появится подробное описание после получения подтверждённых данных.', price:0, oldPrice:0, discount:0, image:'assets/product-1.svg', gallery:['assets/product-1.svg'], variants:[], specs:{'Статус':'Ожидаются данные поставщика'}, source:null },
  { id:'product-2', number:'02', name:'Товар NUVIO 02', short:'Информация по ссылке поставщика ожидает подтверждения.', description:'Автоматически получить достоверные данные по ссылке AliExpress не удалось. Поле подготовлено для ручного добавления описания без выдуманных характеристик.', price:0, oldPrice:0, discount:0, image:'assets/product-2.svg', gallery:['assets/product-2.svg'], variants:[], specs:{'Статус':'Ожидаются данные поставщика','Источник':'AliExpress: _mNWPmUF'}, source:'https://a.aliexpress.com/_mNWPmUF' }
];
export const SET = { id:'nuvio-set', name:'NUVIO SET', price:0 };
export const money = value => value > 0 ? new Intl.NumberFormat('ru-RU').format(value)+' ₽' : 'Цена уточняется';
export const fullPrice = () => PRODUCTS.reduce((sum,p)=>sum+p.price,0);
export const saving = () => Math.max(0,fullPrice()-SET.price);
