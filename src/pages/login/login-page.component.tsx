import React from "react";
import { ButtonComponent } from "../../shared/ui/button/button.component";
import { InputTextComponent } from "../../shared/ui/input-text/input-text.component";
import "./login-page.component.css";
import { CheckboxComponent } from "../../shared/ui/checkbox/checkbox.component";

export const LoginPageComponent = () => {
	const [ email, setEmail ] = React.useState("");
	const [ password, setPassword ] = React.useState("");

	return (
		<div className="login-page-component">
			<div className="login-page-component__header">
				<img src="/assets/svg/language/ru-language.svg"/>
			</div>
			<div className="login-page-component__content">
				<img 
					className="login-page-component__poster"
					src="/assets/imgs/login-poster.png"
				/>
				<div className="login-page-component__card">
					<h1>Вход в аккаунт</h1>
					<form className="login-page-component__form">
						<div className="login-page-component__fields">
							<InputTextComponent 
								label={"Электронная почта"} 
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder="example@gmail.com"			
							/>
							<InputTextComponent 
								label={"Пароль"} 
								value={password}
								onChange={e => setPassword(e.target.value)}
								placeholder="strong pass"
							/>
						</div>
						<div className="login-page-component__actions">
							<CheckboxComponent/>
							<ButtonComponent>
								ВОЙТИ
							</ButtonComponent>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}