<template>
  <div class="bg-[#f5f5f5] min-w-80 w-[40vw] ml-auto flex flex-col gap-6 px-10 h-[100vh] py-5">
    <div class="text-4xl font-medium">
      Оформление заказа
    </div>
    <div class="flex flex-col gap-8 mt-10">
      <div class="text-xl font-medium">
        Данные ученика
      </div>
      <div class="flex flex-col">
        <span class="font-medium">ФИО</span>
        <input class="bg-white h-12 text-sm px-4 outline-black" placeholder="Фамилия Имя Отчество(при наличии)">
      </div>
      <div class="flex flex-col">
        <span class="font-medium">Почта</span>
        <input class="bg-white h-12 text-sm px-4 outline-black" placeholder="example@mail.ru">
        <span class="text-sm">Отправим ссылку для генерации собственного пароля</span>
      </div>
      <div class="flex flex-col">
        <span class="font-medium">Номер телефона</span>
        <input class="bg-white h-12 text-sm px-4 outline-black" placeholder="+7">
      </div>
    </div>
    <div class="mt-auto flex flex-col gap-4">
      <div class="flex justify-between">
        <div class="text-2xl font-medium">
          К оплате:
        </div>
        <div class="text-4xl">
          12 690 ₽
        </div>
      </div>
      <a href="#" class="bg-black text-white py-4 text-center py-3">
        Перейти к оплате
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
