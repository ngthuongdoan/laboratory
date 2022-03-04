import SignUpPage from "./SignUpPage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axiosMock from "tests/mocks/axios";

describe("Sign Up Page", () => {
    describe("Layout", () => {
        it("has header", () => {
            render(<SignUpPage />);
            const header = screen.queryByRole("heading", { name: "Sign Up" });
            expect(header).toBeInTheDocument();
        });

        it("has username input", () => {
            render(<SignUpPage />);
            const input = screen.queryByPlaceholderText("Username");
            expect(input).toBeInTheDocument();
        });

        it("has email input", () => {
            render(<SignUpPage />);
            const input = screen.getByLabelText("Email");
            expect(input).toBeInTheDocument();
        });
        // ......
    });

    describe("Interactions", () => {
        it("should enables the button when password and repeat have the same value", () => {
            render(<SignUpPage />);
            const password = screen.queryByPlaceholderText("Password");
            const passwordRepeat =
                screen.queryByPlaceholderText("Password Repeat");
            const submitButton = screen.getByDisplayValue("Sign up");
            // expect(submitButton).toBeDisabled();
            expect(submitButton).not.toBeDisabled();
            if (password && passwordRepeat) {
                userEvent.type(password, "123456789");
                userEvent.type(passwordRepeat, "123456789");
            }
        });

        it("should sign up user", () => {
            render(<SignUpPage />);
            const username = screen.queryByPlaceholderText("Username");
            const email = screen.queryByPlaceholderText("Email");
            const password = screen.queryByPlaceholderText("Password");
            const submitButton = screen.getByDisplayValue("Sign up");
            expect(submitButton).not.toBeDisabled();
            if (username && email && password) {
                userEvent.type(username, "testuser");
                userEvent.type(email, "example@gmail.com");
                userEvent.type(password, "123456789");
            }

            userEvent.click(submitButton);
            axiosMock.get.mockImplementationOnce(() =>
                Promise.resolve({
                    data: "returned-url-from-database",
                })
            );
            expect(axiosMock.post).toHaveBeenCalledTimes(1);
            // const mockFn = jest.fn();
            // axios.post = mockFn;
            // const firstCallOfMockFunction = mockFn.mock.calls[0];
            // console.log(mockFn.mock.calls);

            // const body = firstCallOfMockFunction[1];
            // expect(body).toEqual({
            //     username: "testuser",
            //     emmail: "example@gmail.com",
            //     password: "123456789",
            // });
        });
    });
});
