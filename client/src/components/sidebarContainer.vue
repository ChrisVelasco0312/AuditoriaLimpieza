<template>
  <Sidebar v-model:visible="visibleLeft" class="sidebar">
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
    <Button label="Cerrar Sesión" @click="signOut" />
  </Sidebar>
  <Button
    class="sidebar-button"
    icon="pi pi-list"
    @click="visibleLeft = true"
  />
</template>

<script>
import 'primeflex/primeflex.css'
import Menu from 'primevue/menu'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

export default {
  name: 'SidebarContainer',
  components: {
    Menu,
    Button,
    Sidebar,
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
      visibleLeft: false,
    }
  },
  methods: {
    openEdit() {
      console.log('WORKS')
    },
    signOut() {
      window.location.href = '/'
    },
  },
}
</script>

<style>
.sidebar {
  position: absolute;
  background: var(--color-light);
  color: var(--color-primary);
  box-shadow: 3px 1px 1px 0px #0000001a;
}
.sidebar > .p-sidebar-content {
  display: grid;
  place-items: center;
  height: 100vh;
  padding: 0;
}
.p-sidebar .p-sidebar-header {
  align-self: start;
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

.sidebar-button {
  position: fixed;
  top: 20px;
  left: 20px;
}
</style>

