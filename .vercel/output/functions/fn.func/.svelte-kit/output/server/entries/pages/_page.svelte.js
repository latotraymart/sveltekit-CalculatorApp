import { c as create_ssr_component, d as add_attribute } from "../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1gmv5eg{text-align:center;padding:1em;max-width:240px;margin:0 auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let expression = "";
  $$result.css.add(css);
  return `<main class="svelte-1gmv5eg"><h1 data-svelte-h="svelte-1uec9h8">Calculator</h1> <input type="text" placeholder="Enter expression"${add_attribute("value", expression, 0)}> <button data-svelte-h="svelte-1ie3dxy">Calculate</button> ${``} </main>`;
});
export {
  Page as default
};
