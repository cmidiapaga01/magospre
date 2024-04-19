// Adicione importações no início do arquivo onde BtnList é definido
import Modal1 from '../components/modals/Modal1';
import Modal2 from '../components/modals/Modal2';
import Modal3 from '../components/modals/Modal3';

export const BtnList = [
  { label: "Home", link: "/", icon: "home", newTab: false },
  { label: "About", link: "/about", icon: "about", newTab: false },
  { label: "Projects", link: "/projects", icon: "projects", newTab: false },
  { label: "Contact", link: "/contact", icon: "contact", newTab: false },
  { label: "Modal 1", link: "#", icon: "teste1", newTab: false, modalComponent: Modal1 },
  { label: "Modal 2", link: "#", icon: "teste2", newTab: false, modalComponent: Modal2 },
  { label: "Modal 3", link: "#", icon: "teste3", newTab: false, modalComponent: Modal3 },
  // Inclua outros botões como anteriormente
];
