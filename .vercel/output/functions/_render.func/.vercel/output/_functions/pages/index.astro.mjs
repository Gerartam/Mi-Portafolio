/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, d as renderComponent, e as renderSlot, f as createAstro } from '../chunks/astro/server_GGNLYHyS.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Image } from '../chunks/_astro_assets_wclDtCAR.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="fixed flex flex-col sm:flex-row justify-between py-6 w-full text-white backdrop-brightness-50 backdrop-blur-sm shadow-lg px-5 lg:px-36 top-0 content-center"> <div class="text-4xl lg:text-5xl font-light justify-center sm:justify-normal text-center animate-delay-700 animate-fade-in-right animate-duration-1000"> <a href="">Gerardo Tamayo</a> </div> <nav class="flex flex-row gap-9 text-lg lg:text-xl font-light justify-center sm:justify-normal pt-3 animate-delay-700 animate-fade-in-left animate-duration-700"> <a href="#sobremi" class="hover:text-red-800">Sobre mi</a> <a href="#mitrabajo" class="hover:text-red-800">Mi trabajo</a> </nav> </header>`;
}, "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Portafolio personal fotografico, todo mi trabajo se ve aqui"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/layouts/Layout.astro", void 0);

const perImage2 = new Proxy({"src":"/_astro/cusenier2.C4-lOOlt.jpeg","width":4160,"height":3120,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/assets/cusenier2.jpeg";
							}
							
							return target[name];
						}
					});

const perImage = new Proxy({"src":"/_astro/cusenier.cdAva6WK.jpeg","width":4160,"height":3120,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/assets/cusenier.jpeg";
							}
							
							return target[name];
						}
					});

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="flex md:flex-row flex-col"> <div class="text-white md:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": perImage, "alt": "...", "class": "bg-cover h-full" })} </div> <div class="md:w-1/2 w-full h-auto py-8 bg-stone-600 text-white content-center"> <div class="justify-center my-7 mx-auto"> <h1 id="mitrabajo" class="text-3xl mb-8 w-40 mx-auto justify-center text-center border-b-2 pb-3">Conciertos</h1> <p class="w-56 sm:w-1/2 mx-auto text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem modi veniam, cum ipsa sed blanditiis alias cupiditate. Nostrum obcaecati odio id deleniti voluptate eius facilis praesentium voluptatum aliquid aliquam.</p> </div> </div> </article> <article class="flex md:flex-row flex-col"> <div class="md:w-1/2 w-full h-auto py-8 bg-stone-600 text-white content-center md:block hidden"> <div class="justify-center my-5 mx-auto"> <h1 class="text-3xl mb-8 w-40 mx-auto justify-center text-center border-b-2 pb-3">Paisajes</h1> <p class="w-56 sm:w-1/2 mx-auto text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem modi veniam, cum ipsa sed blanditiis alias cupiditate. Nostrum obcaecati odio id deleniti voluptate eius facilis praesentium voluptatum aliquid aliquam.</p> </div> </div> <div class="text-white md:w-1/2"> ${renderComponent($$result, "Image", $$Image, { "src": perImage2, "alt": "...", "class": "bg-cover h-full" })} </div> <div class="md:w-1/2 w-full h-auto py-8 bg-stone-600 text-white content-center md:hidden block"> <div class="justify-center my-5 mx-auto"> <h1 class="text-3xl mb-8 w-40 mx-auto justify-center text-center border-b-2 pb-3">Paisajes</h1> <p class="w-56 sm:w-1/2 mx-auto text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem modi veniam, cum ipsa sed blanditiis alias cupiditate. Nostrum obcaecati odio id deleniti voluptate eius facilis praesentium voluptatum aliquid aliquam.</p> </div> </div> </article>`;
}, "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/components/Card.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gerardo Tamayo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="justify-between items-center"> <div style="background-image: url('/paisaje1.jpg'); background-size: cover; background-attachment: auto;" class="bg-center h-[670px]"></div> <div id="sobremi" class="flex flex-col h-auto my-24"> <div class="flex bg-black h-20 w-20 rounded-full mb-9 mx-auto"></div> <h1 class="text-3xl mb-11 w-40 mx-auto text-center animate-fade-in-right animate-delay-1000 animate-duration-1000">Sobre mi</h1> <p class="w-56 sm:w-1/3 mx-auto text-justify animate-fade-in-left animate-delay-1000 animate-duration-1000">Hola! soy Gerardo, tengo 20 años y vivo en Rosario Argentiina Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem modi veniam, cum ipsa sed blanditiis alias cupiditate. Nostrum obcaecati odio id deleniti voluptate eius facilis praesentium voluptatum aliquid aliquam.</p> </div> ${renderComponent($$result2, "Card", $$Card, {})} </main> ` })}`;
}, "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/pages/index.astro", void 0);

const $$file = "D:/Usuarios/Gerar/MyProject/My-Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
