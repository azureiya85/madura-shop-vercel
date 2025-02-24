<script lang="ts">
	import { goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import Layout from './Layout.svelte';
	import Loading from './Loading.svelte';

	let username = writable('');
	let password = writable('');
	let isLoading = writable(false);

	function handleLogin(event: Event) {
		event.preventDefault();
		const credentials = {
			username: 'agus123',
			password: 'handless'
		};

		if ($username === credentials.username && $password === credentials.password) {
			isLoading.set(true);
			setTimeout(() => {
				isLoading.set(false);
				goto('/landing');
			}, 2000);
		} else {
			alert('Login gagal, silahkan cek username atau password kamu');
		}
	}
</script>

<Layout>
	{#if $isLoading}
		<Loading />
	{:else}
		<div class="flex flex-col justify-center items-center w-full h-screen">
			<h2 class="text-2xl font-extrabold text-secondary-500 my-20">Madura Shop</h2>
			<form class="flex flex-col gap-y-5" on:submit={handleLogin}>
				<input
					type="text"
					class="border p-3 my-2 rounded-md w-60 text-black"
					placeholder="Ketik username disini ..."
					bind:value={$username}
				/>
				<input
					type="password"
					class="border p-3 my-2 rounded-md w-60 text-black"
					placeholder="Ketik password disini ..."
					bind:value={$password}
				/>
				<button
					type="submit"
					class="p-3 bg-secondary-600 hover:bg-secondary-700 rounded-md font-semibold"
				>
					Login
				</button>
			</form>
		</div>
	{/if}
</Layout>
