<template>
  <div class="sidebar">
    <section class="profile">
      <img
        src="@/assets/profile_photo.png"
        alt="profilephoto"
        class="profile__photo"
      />
      <div class="profile__info">
        <h2 class="profile__name">Luisa Gaviria</h2>
        <i href="#" class="profile__edit pi pi-user-edit" @click="openEdit"></i>
      </div>
    </section>
    <Menu :model="items" />
    <img class="logo" src="@/assets/logo.svg" alt="" />
    <Button label="Cerrar Sesión" />
  </div>
</template>

<script>
import 'primeflex/primeflex.css'
import Menu from 'primevue/menu'
import Button from 'primevue/button'

export default {
  name: 'SidebarContainer',
  components: {
    Menu,
    Button,
  },
  data: () => {
    return {
      items: [
        {
          label: 'Crear Auditoría',
          icon: 'pi pi-plus-circle',
          to: '/registrar',
        },
        {
          label: 'Revisar Auditorias',
          icon: 'pi pi-book',
          to: '/consultar',
        },
      ],
    }
  },
  methods: {
    openEdit() {
      console.log('WORKS')
    },
  },
}
</script>

<style>
.sidebar {
  display: grid;
  place-items: center;
  height: 100vh;
  min-width: 300px;
  max-width: 25%;
  background: var(--color-light);
  color: var(--color-primary);
  box-shadow: 3px 1px 1px 0px #0000001a;
}
section.profile {
  display: grid;
  place-items: center;
  padding: 1rem;
}
.profile__info {
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  place-items: center;
}
.profile__edit {
  cursor: pointer;
}
.p-menu.p-component {
  width: 100%;
  background: transparent;
  border: none;
}
.p-menu .p-menuitem-link {
  padding: 2rem;
}
.sidebar .logo {
  width: 80px;
}
</style>

