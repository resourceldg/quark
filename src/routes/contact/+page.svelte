<svelte:head>
	<title>Contact</title>
	<meta name="description" content="collections" />
</svelte:head>
<section style="font-size: 16px; line-height: 1.6; color: #4a5568;" class="relative">
	<div style="max-width: 640px; margin: 0 auto; padding: 0 20px; text-align: center; margin-bottom: 30px;">
	  <h1 style="font-size: 28px; font-weight: 500; margin-bottom: 20px; color: #1a202c;">Contáctenos</h1>
	  <p style="font-size: 16px; margin-bottom: 20px;">Esperamos su mensaje, responderemos a la brevedad</p>
	</div>
	<div style="max-width: 640px; margin: 0 auto;">
	  <div style="display: flex; flex-wrap: wrap; margin: -10px;">
		<div style="flex-basis: 50%; padding: 10px;">
		  <div style="position: relative;">
			<label style="font-size: 14px; color: #4a5568; line-height: 1.5;" for="name">Nombre</label>
			<input style="width: 100%; border: 1px solid #d2d6dc; border-radius: 4px; padding: 10px; font-size: 16px; margin-top: 6px;" type="text" id="name" name="name" />
		  </div>
		</div>
		<div style="flex-basis: 50%; padding: 10px;">
		  <div style="position: relative;">
			<label style="font-size: 14px; color: #4a5568; line-height: 1.5;" for="email">Email</label>
			<input style="width: 100%; border: 1px solid #d2d6dc; border-radius: 4px; padding: 10px; font-size: 16px; margin-top: 6px;" type="email" id="email" name="email" />
		  </div>
		</div>
		<div style="flex-basis: 100%; padding: 10px;">
		  <div style="position: relative;">
			<label style="font-size: 14px; color: #4a5568; line-height: 1.5;" for="message">Mensaje</label>
			<textarea style="width: 100%; border: 1px solid #d2d6dc; border-radius: 4px; padding: 10px; font-size: 16px; margin-top: 6px; resize: none; height: 160px;" id="message" name="message"></textarea>
		  </div>
		</div>
		<div style="flex-basis: 100%; padding: 10px;">
		  <button style="display: flex; justify-content: center; align-items: center; width: 100%; background-color: #e53e3e; border: 0; border-radius: 4px; color: #fff; font-size: 16px; padding: 14px 0; cursor: pointer; transition: background-color 0.3s ease-in-out;" type="submit">Enviar</button>
		</div>
		<div style="padding: 0.5rem; width: 100%; padding-top: 2rem; margin-top: 2rem; border-top: 1px solid #ddd; text-align: center;">
			<a style="color: #f56565;" href="start">ejemplo@email.com</a>
			<p style="line-height: 1.5; margin-top: 1.25rem;"><br></p>
			<span style="display: inline-flex;">
			  <a style="color: #6b7280; margin-right: 1rem;" href="start">
				Face
				<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="width: 1.25rem; height: 1.25rem; margin-left: 0.25rem;" viewBox="0 0 24 24">
				  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
				</svg>
			  </a>
			  <a style="color: #6b7280; margin-right: 1rem;" href="start">
				Twitter
				<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="width: 1.25rem; height: 1.25rem; margin-left: 0.25rem;" viewBox="0 0 24 24">
				  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
				</svg>
			  </a>
			  <a style="color: #6b7280; margin-right: 1rem;" href="start">
				Instagram
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="width: 1.25rem; height: 1.25rem; margin-left: 0.25rem;" viewBox="0 0 24 24">
				  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
				  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
				</svg>
			  </a>
			  <a style="color: #6b7280; margin-right: 1rem;" href="start">
				Whatsapp
				<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
					<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
				  </svg>
			  </a>
			</span>
		</div>
</section>