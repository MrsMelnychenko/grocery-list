import Block from "../components/Block";
import Header from "../components/Header";
import styles from "./SignIn.module.css";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const AddProduct = () => {
  return (
    <>
      <Header />
      <br />
      <div className={styles.card}>
        <div>
          <div>
            <Block istitle={"true"}>Some title</Block>
          </div>
          <div>
            <Block istitle={"false"}>
              <ControlPointIcon color="success" /> Add Product
            </Block>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
