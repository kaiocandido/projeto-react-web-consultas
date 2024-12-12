import { ContainerButton } from "./styles";
import PropTypes from "prop-types";

export default function Button({ children, ...props }) {
    return (
        <ContainerButton {...props}>{children}</ContainerButton>
    );
}

Button.propTypes = {
    children: PropTypes.string,
};

