# Kontulari Weather

<p>This project is a technical challenge that involves consuming an API provided by the Kontulari technical team and presenting a user interface with weather information for the city entered by the user. The application is required to be responsive and functional, with implementation details left to the participant.</p>

## Application Screenshots

![image](https://user-images.githubusercontent.com/72168914/150454883-5ebbf1d3-26e9-4328-ba24-679b00888e9e.png)
 
![image](https://user-images.githubusercontent.com/72168914/150454563-8c444151-34c9-4182-afc7-f7e7b9986afc.png)

## Requirements

- Node.js (version 14.17 or higher)
- Git (version 2.33 or higher)
- Yarn (version 1.22 or higher)

## Tech Stack

- ReactJS
- JavaScript
- HTML
- CSS
- Bootstrap

## How to Run

1. Navigate to the `client` directory, open a terminal, and install dependencies:

    ```bash
    yarn
    ```

2. In the same `client` directory, start the development server:

    ```bash
    yarn start
    ```

3. In another terminal, navigate to the `client` directory and start the server:

    ```bash
    node server/app.js
    ```

## TODO

The technical challenge is not 100% complete. Below are the pending tasks and issues that need to be addressed:

1. **Error Handling**:
    - Proper error messages need to be implemented for various scenarios, such as invalid city input or network errors.
    - Current implementation lacks user feedback for these situations.

2. **Improved UI/UX**:
    - Enhance the user interface to provide a better user experience.
    - Implement loading indicators while fetching data from the API.

3. **Testing**:
    - Add unit and integration tests to ensure the reliability of the application.

