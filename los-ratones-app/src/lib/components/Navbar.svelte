<script>
	import { page } from '$app/state';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Img, Popover, Hr, P } from 'flowbite-svelte';
	import { fade } from 'svelte/transition';

	let props = $props();
</script>

<Navbar class="bg-night-800 text-peachYellow-200 px-8 sm:px-24 border-b-2 mb-4 border-peachYellow-200" fluid={true}>
	<NavBrand href="/">
		<Img src="/los-ratones-logo.png" alt="Los Ratones Logo" class="me-3 h-6 sm:h-9" />
		<span class="self-center whitespace-nowrap text-xl font-semibold">Los Ratones</span>
	</NavBrand>
	<NavHamburger/>
	<NavUl activeUrl={page.url.pathname} activeClass="text-lion-500" nonActiveClass="text-peachYellow-200" ulClass="bg-night-800 flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-sm md:font-medium">
		<NavLi href="/draft" data-sveltekit-preload-data="hover">Draft</NavLi>
		{@render VerticalSeperator()}
		<NavLi href="/availablechamps" data-sveltekit-preload-data="hover">Available Champs</NavLi>
		{@render VerticalSeperator()}
		<NavLi href="/calendar" data-sveltekit-preload-data="hover">Calendar</NavLi>
		{@render VerticalSeperator()}
		<NavLi>
			<span class="cursor-pointer" id="Contact">Contact</span>
			<Popover trigger="click" placement="bottom" class="bg-night-800 p-4 rounded-lg shadow-lg" transition={fade}>
				<div class="flex flex-col items-start gap-2">
					<span class="text-lg font-semibold text-peachYellow-200">Contact Me</span>
					<P color="text-white">Email: miniluva@minirat.xyz</P>
					<P color="text-white">Twitter: Mini2k16</P>
					<P color="text-white">Discord: Miniluva</P>
					<P color="text-white">Twitch: Miniluva</P>
					<P color="text-white">Feel free to reach out!</P>
				</div>
			</Popover>
		</NavLi>
	</NavUl>
</Navbar>

{#snippet VerticalSeperator()}
	<div class="h-6 border-l border-peachYellow-200 hidden sm:block"></div>
{/snippet}