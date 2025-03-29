import React from "react";
import { ButtonComponent } from "../shared/ui/button/button.component";
import { CheckboxComponent } from "../shared/ui/checkbox/checkbox.component";
import { InputTextComponent } from "../shared/ui/input-text/input-text.component";
import { RadioComponent } from "../shared/ui/radio/radio.component";
import { SwitchComponent } from "../shared/ui/switch/switch.component";
import "./../shared/styles/typography.css";
import "./../shared/styles/fonts.css";
import { LoginPageComponent } from "../pages/login/login-page.component";

const TestComponent: React.FC<{children: React.ReactNode, name: string}> = ({children, name}) => {
	return (
		<div style={{display: "flex", gap: 16, alignItems: "center"}}>
			<span>{name}</span>
			{children}
		</div>
	)
}

const TestContur = () => {
	const [ inputValue, setInputValue ] = React.useState("");
	const [ isError, setIsError ] = React.useState(false);
	const [ disabled, setDisabled ] = React.useState(false);

	const searcIcon = () => !disabled ? isError ? "/assets/svg/interface/red/search.svg" : "/assets/svg/interface/black/search.svg" : "/assets/svg/interface/black/search.svg"
	const crossIcon = () => !disabled ? isError ? "/assets/svg/edit/red/cross-outlined.svg" : "/assets/svg/edit/black/cross-outlined.svg" : "/assets/svg/interface/black/search.svg"

	return (
		<div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 32, padding: 64}}>
			<div style={{display: "flex", position: "sticky", top: 0, padding: 16, background: "#fff"}}>
				<button onClick={() => setDisabled(true)}>set disabled true</button>
				<button onClick={() => setDisabled(false)}>set disabled false</button>
				<button onClick={() => setIsError(true)}>set error true</button>
				<button onClick={() => setIsError(false)}>set error false</button>
			</div>

			<TestComponent name="h1">
				<h1>Hello app</h1>
			</TestComponent>
			<TestComponent name="h2">
				<h2>Hello app</h2>
			</TestComponent>
			<TestComponent name="h3">
				<h3>Hello app</h3>
			</TestComponent>
			<TestComponent name="h4">
				<h4>Hello app</h4>
			</TestComponent>
			<TestComponent name="p1">
				<p className="p1">Hello app</p>
			</TestComponent>
			<TestComponent name="p2">
				<p className="p2">Hello app</p>
			</TestComponent>
			<TestComponent name="button">
				<ButtonComponent disabled={disabled}>Hello app</ButtonComponent>
			</TestComponent>
			<TestComponent name="button outlined">
				<ButtonComponent type="outlined" disabled={disabled}>Hello app</ButtonComponent>
			</TestComponent>
			<TestComponent name="checkbox">
				<CheckboxComponent disabled={disabled}/>
			</TestComponent>
			<TestComponent name="input text">
				<InputTextComponent
					label="Label"
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}

					isError={isError}
					disabled={disabled}
					caption="Supporting text"

					leftIconSrc={searcIcon()}
					onClickLeftIcon={() => console.log("search")}
					rightIconSrc={crossIcon()}
					onClickRightIcon={() => console.log("clear")}
				/>
			</TestComponent>
			<TestComponent name="radio">
				<RadioComponent/>
			</TestComponent>
			<TestComponent name="switch">
				<SwitchComponent/>
			</TestComponent>
		</div>
	)
}


export const App = () => {
	return (<LoginPageComponent/>)
}