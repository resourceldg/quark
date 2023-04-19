import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-exq76x{border-bottom:1px solid rgba(21, 10, 34, 0.1);font-weight:400;padding:0 1em}ul.svelte-exq76x{margin:0;padding:0}ul.svelte-exq76x::after{content:'';display:block;clear:both}li.svelte-exq76x{display:block;float:left}a.svelte-exq76x{text-decoration:none;padding:1em 0.5em;display:block}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<nav class="svelte-exq76x"><ul class="svelte-exq76x"><li class="svelte-exq76x"><a href="/" class="svelte-exq76x">Inicio</a></li>

     
            
            <li class="svelte-exq76x"><a href="about" class="svelte-exq76x">Nosotros</a></li>
            <li class="svelte-exq76x"><a href="collections" class="svelte-exq76x">Librería Digital</a></li>
            
            </ul>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1uhnsl8{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}

<main class="svelte-1uhnsl8">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
