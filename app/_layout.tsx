import { Drawer } from "expo-router/drawer";


export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "principal",
        }}
      />
      <Drawer.Screen
        name="telaA" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela A",
          title: "Bem vindo a tela A",
        }}
      />
      <Drawer.Screen
        name="telaB" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela B",
          title: "Bem vindo a tela B",
          drawerItemStyle: { height: 0 }
        }}
      />
    </Drawer>
  );
}