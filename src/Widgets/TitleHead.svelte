<script>
    export let msg;
</script>

<section class="settings-section1__section1 layout">
    <div class="settings-section1__block4 layout">
        <h1 class="settings-section1__big-title layout">{msg}</h1>
        <div
            style="--src:url(https://cdn.discordapp.com/attachments/995367294660255785/1001160698149208185/App_Icon.png?width=580&height=580)"
            class="settings-section1__image4 layout"
        />
    </div>
    <hr class="settings-section2__line layout" />
</section>
<hr class="settings-section2__line layout" />

<style>
    :root {
        --color-smoke: #e4e4e4;
        --borderRadius: 36px;
    }
    .settings-section2__line {
        background-color: #323239;
    }
    .settings-section2__line.layout {
        position: absolute;
        top: 0px;
        height: 1px;
        left: 0px;
        right: 0px;
        margin: -30px 0px 160px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    hr {
        display: block;
        font-size: 1em;
        font-weight: normal;
        margin: 0;
        border-width: 0;
        opacity: 1;
    }

    /* fonts.css */
    @import url("https://fonts.googleapis.com/css2?family=Outfit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    @font-face {
        font-family: "FontAwesome";
        font-weight: normal;
        font-style: normal;
        src: url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?v=4.3.0");
        src: url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.eot?#iefix&v=4.3.0")
                format("embedded-opentype"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff2?v=4.3.0")
                format("woff2"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.woff?v=4.3.0")
                format("woff"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.ttf?v=4.3.0")
                format("truetype"),
            url("https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/fonts/fontawesome-webfont.svg?v=4.3.0#fontawesomeregular")
                format("svg");
    }

    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    .settings-section1__section1 {
        display: flex;
        flex-direction: column;
    }
    .settings-section1__section1.layout {
        position: relative;
    }
    .settings-section1__block4 {
        display: flex;
        flex-direction: column;
    }
    .settings-section1__block4.layout {
        position: relative;
        flex-grow: 1;
        width: 70%;
        margin: 42px 38.89% 35px 27.78%;
    }
    .settings-section1__big-title {
        font: 300 32px/1.2 "Outfit", Helvetica, Arial, serif;
        color: white;
        letter-spacing: 0px;
        opacity: 0.85;
    }
    .settings-section1__big-title.layout {
        position: relative;
        height: -webkit-min-content;
        height: -moz-min-content;
        height: min-content;
        min-width: 0px;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
    }
    .settings-section1__image4 {
        background: var(--src) center center/contain no-repeat;
    }
    .settings-section1__image4.layout {
        position: absolute;
        top: -7px;
        height: 150%;
        left: -70px;
        width: 46px;
    }
</style>
