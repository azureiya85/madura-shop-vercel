<script lang="ts">
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';

	// User authentication state (mock example)
	let isLoggedIn = writable(false);
	let userAvatar = writable('https://via.placeholder.com/40');

	function navigate(path: string) {
		goto(path);
	}

	function handleLogin() {
		navigate('/login');
	}
</script>

<nav
	class="w-full h-10 bg-secondary-500 p-5 flex fixed top-0 gap-5 justify-between items-center text-white"
>
	<!-- Left: Shop Name -->
	<div class="font-semibold text-lg cursor-pointer" on:click={() => navigate('/')}>Madura Shop</div>

	<!-- Middle: Navigation Links -->
	<div class="flex gap-x-5">
		<!-- <span -->
		<!-- 	class="text-slate-100 hover:text-slate-300 cursor-pointer" -->
		<!-- 	on:click={() => navigate('/main')} -->
		<!-- > -->
		<!-- 	Main -->
		<!-- </span> -->
		<!-- <span -->
		<!-- 	class="text-slate-100 hover:text-slate-300 cursor-pointer" -->
		<!-- 	on:click={() => navigate('/main/test-1')} -->
		<!-- > -->
		<!-- 	Test 1 -->
		<!-- </span> -->
		<!-- <span -->
		<!-- 	class="text-slate-100 hover:text-slate-300 cursor-pointer" -->
		<!-- 	on:click={() => navigate('/main/test-2')} -->
		<!-- > -->
		<!-- 	Test 2 -->
		<!-- </span> -->
	</div>

	<!-- Right: Login Button / Avatar -->
	<div class="flex gap-3 items-center">
		<!-- {#if $isLoggedIn} -->
		<!-- 	<img -->
		<!-- 		src={$userAvatar} -->
		<!-- 		alt="User Avatar" -->
		<!-- 		class="w-10 h-10 rounded-full border-2 border-white cursor-pointer" -->
		<!-- 	/> -->
		<!-- {:else} -->
		<!-- 	<button -->
		<!-- 		class="p-2 bg-primary-700 hover:bg-secondary-700 rounded-md font-semibold" -->
		<!-- 		on:click={handleLogin} -->
		<!-- 	> -->
		<!-- 		Login -->
		<!-- 	</button> -->
		<!-- {/if} -->
	</div>
</nav>
