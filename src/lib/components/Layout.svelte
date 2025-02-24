<script lang="ts">
	export let children: any;
</script>

<div class="bg-slate-200 w-screen h-full flex flex-col justify-center items-center">
	<slot>{children}</slot>
</div>
