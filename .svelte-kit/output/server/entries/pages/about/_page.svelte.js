import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1ds1qyu_START -->${$$result.title = `<title>About</title>`, ""}<meta name="description" content="About this app"><!-- HEAD_svelte-1ds1qyu_END -->`, ""}

<section class="text-gray-600 body-font"><div class="container mx-auto flex flex-col"><div class="w-9/10 mx-auto"><div class="shadow-2xl rounded-lg h-64 overflow-hidden"><img alt="volantes jarilla" src="volantes.png"></div>
        <div class="flex flex-col sm:flex-row mt-10"><div class="sm:w-1/3 text-center sm:pr-8 sm:py-8"><div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400"><img class="w-20 h-20 rounded-full " alt="Viviana Rodriguez" src="vivi.png"></div>
            <div class="flex flex-col items-center text-center justify-center"><h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Viviana Rodríguez</h2>
              <div class="w-12 h-1 bg-red-500 rounded mt-2 mb-4"></div>
              <p class="text-base">Directora Editorial Jarilla.</p></div></div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"><p class="leading-relaxed text-lg mb-4">Nos complace presentarnos como un grupo de escritores con la debida experiencia para ofrecer un servicio personalizado de edición en todos los géneros literarios y formatos de impresión física o virtual. </p>
            <a class="text-red-500 inline-flex items-center" href="start">Leer más     </a></div></div></div></div></section>`;
});
export {
  Page as default
};
