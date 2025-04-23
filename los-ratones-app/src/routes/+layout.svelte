<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '@fortawesome/fontawesome-free/css/all.min.css'

	let { children } = $props();
</script>

<Navbar />
{@render children()}
<Footer />