import { Formik, Form, Field } from 'formik';
import Button from "../buttons/Button";

const LoginForm = () => {
	return (
		<Formik initialValues={{ name: "", password: "" }}
						onSubmit={({ setSubmitting }) => {
							console.log("Form is validated! Submitting the form...");
							setSubmitting(false);
						}}
		>
			{() => (
				<div className="container">
					<div className="form-card">
						<Form>
							<div className="form-group">
								<label htmlFor="name"></label>
								<Field
									id="name"
									type="text"
									name="name"
									className="form-control"
								/>
							</div>
							<div className="form-group">
								<label htmlFor="password"></label>
								<Field
									id="password"
									type="password"
									name="password"
									className="form-control"
								/>
							</div>
						</Form>
						<Button title="Войти" />
					</div>
				</div>
			)}
		</Formik>
	);
}

export default LoginForm;
