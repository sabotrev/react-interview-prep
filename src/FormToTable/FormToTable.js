import React, { useState } from 'react';

const initialState = {
    input1: {
        id: 1,
        name: 'input1',
        type: 'text',
        value: '',
    },
    input2: {
        id: 2,
        name: 'input2',
        type: 'text',
        value: '',
    },
    input3: {
        id: 3,
        name: 'input3',
        type: 'text',
        value: '',
    },
};

const InputComponent = ({ inputObject, onChange }) => {
    return (
        <div>
            <label>
                {inputObject.name}
                <input
                    type="text"
                    name={inputObject.name}
                    value={inputObject.value}
                    onChange={(event) => onChange(event, inputObject.name)}
                />
            </label>
        </div>
    );
};

const FormComponent = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <input type="submit" value="Submit" />
        </form>
    );
};

const Table = ({ submittedObject }) => {
    console.log('rendered');
    return <div>{JSON.stringify(submittedObject)}</div>;
};

const FormToTable = () => {
    const [formState, setFormState] = useState(initialState);
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const handleSubmit = (event) => {
        event.preventDefault();
        setHasSubmitted(true);
        // TODO: Build Table
        console.log(formState);
    };

    const handleChange = (event, inputKey) => {
        const newValue = event.target.value;
        setFormState((prevState) => {
            prevState[inputKey].value = newValue;
            return { ...prevState };
        });
    };

    return (
        <>
            <FormComponent onSubmit={handleSubmit}>
                {Object.values(formState).map((item) => {
                    return (
                        <InputComponent
                            key={item.id}
                            inputObject={item}
                            onChange={handleChange}
                        />
                    );
                })}
            </FormComponent>
            {hasSubmitted && <Table submittedObject={formState} />}
        </>
    );
};

export default FormToTable;
