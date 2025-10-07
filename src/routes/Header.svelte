<!-- Script -->
<script lang="ts">
   let sections = [
        { name: 'Home', path: '/' },
        { name: 'Example', path: '/example-page' }
    ];
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>


<!-- HTML -->
<main>
    <header class="min-h-[50px] relative bg-gray-700 overflow-hidden flex justify-center">
        
        <!-- <div class="burger-menu" on:click={toggleMenu}>
            <div class="w-full h-1 bg-[#333333] rounded-sm"></div>
            <div class="w-full h-1 bg-[#333333] rounded-sm"></div>
            <div class="w-full h-1 bg-[#333333] rounded-sm"></div>
        </div> -->


        <nav class="flex" class:open={isMenuOpen}>
            <ul class="flex items-center ">
                {#each sections as section}
                <li class="text-white transition-transform duration-200 hover:text-yellow-400 hover:scale-110">
                    <a class=" text-center px-4 py-3 text-[17px] no-underline" href={section.path} on:click={() => (isMenuOpen = false)}>{section.name}</a>
                </li>
                {/each}
            </ul>
        </nav>
    </header>
</main>


<!-- CSS -->
<style>

</style>


<!-- end of code -->