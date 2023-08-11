<template>
    <div class="langbuttons">
        <button class="langb" type="submit" @click="$i18n.locale = 'en'">EN</button>
        <button class="langb" type="submit" @click="$i18n.locale = 'es'">ES</button>
        <button class="langb" type="submit" @click="$i18n.locale = 'ru'">RU</button>
    </div>
</template>