import './DefaultButton.css';

function DefaultButton(props) {
    return (
        <a 
            href={props.href}
            download={props.download}
            className={props.className}
            target={props.target}
        >
                {props.action}
        </a>
    );
}

export default DefaultButton
