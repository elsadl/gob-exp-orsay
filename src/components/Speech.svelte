<script>
    import gsap, { Power3 } from "gsap";
    import { onMount } from "svelte";
    export let sentence;
    
    const dispatchArray = sentence.split('').map((item) => item)

    onMount(() => {
        let tl =  gsap.timeline()
        tl
            .from(".avatar", {
                y: "40", 
                duration: 1,
                opacity: 0,
                ease: Power3.easeInOut
            })
            .to(".speech", {
                y: "0", 
                duration: 1,
                opacity: 1,
                delay: -.7,
                ease: Power3.easeInOut
            })
            .from(".letter", {
                y: 5, 
                opacity: 0,
                duration: .3, 
                stagger: {
                    each: 0.02,
                    from: "start"
                },
                delay: -1,
                ease: Power3.easeInOut,
            })
    });
</script>

<section>
    <div class="speech">
        <h3 class="sentence">
            {#each dispatchArray as item}
                {#if item === ' ' }
                    <span class="letter space"></span> 
                {:else}
                    <span class="letter">{@html item}</span>
                {/if}
            {/each}
        </h3>
    </div>
    <img class="avatar" src="/images/Amigos.png" alt="">
</section>

<style>
    section {
        /* visibility: hidden; */
        position: relative;
    }
    .speech {
        width: 400px;
        padding: 10px 20px;
        box-shadow: 10px 10px 0px #D7CEC8;
        border-radius: 30px;
        opacity: 0;
        transform: translateY(-40px);

        /* provisoire */
        background-color: #E5E5E5;
    }
    h3 {
        font-size: 1.25em;
    }
    .space {
        padding-right: 8px;
    }

    .letter {
        display: inline-block;
        will-change: transform;
    }
    .avatar {
        position: absolute;
        right: -165px;
        top: -10px;
    }
</style>