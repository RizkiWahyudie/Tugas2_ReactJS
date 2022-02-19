import Header from "./Page/Header";
import Footer from "./Page/Footer";
import ListMenuUtama from "./ListData/ListMenuUtama";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import MenuMakanan from "./Page/MenuMakanan";

function App() {
  return (
    <div>
        <Header />
        <ListMenuUtama linkImg = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" />
        <MenuMakanan />
        <MenuTentangKami />
        <MenuKontak />
        <Footer />
    </div>
  );
}

export default App;
