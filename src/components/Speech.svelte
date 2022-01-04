<script>
    import gsap, { Power3 } from "gsap";
    import { afterUpdate, onMount } from "svelte";
    export let sentence;
    export let count;

    afterUpdate(() => {
        let tl =  gsap.timeline()
        if(count === 0) {
            tl
                .from(".avatar", {
                    y: "40", 
                    duration: 1,
                    opacity: 0,
                    ease: Power3.easeInOut
                })
        }
        tl
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
                delay: -1.4,
                ease: Power3.easeInOut,
            })
    })

</script>

<section>
    <div class="speech">
        <h3 class="sentence">
            {#each sentence as item}
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
        padding: 20px 30px;
        box-shadow: 10px 10px 0px #D7CEC8;
        border-radius: 30px;
        opacity: 0;
        transform: translateY(-40px);
        /* visibility: hidden; */
        /* provisoire */
        background-color: #E5E5E5;
    }
    h3 {
        font-size: 1.25em;
        line-height: 1.25;
        margin: 0;
    }
    .space {
        padding-right: 8px;
    }

    .letter {
        display: inline-block;
        will-change: transform;
        /* padding-right: 8px; */
    }
    .avatar {
        position: absolute;
        right: -165px;
        top: -10px;
    }
</style>