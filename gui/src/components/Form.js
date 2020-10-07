import React from 'react';
import {Form, Button, Input} from 'antd';

const FormItem = Form.Item;

const CustomForm = (props) => {

    function handleFormSubmit(event) {
        event.preventDefault();
        const title = event.target.elements.title.value;
        const content = event.target.elements.content.value;

        console.log(title, content);
    }

    return (
        <Form onSubmitCapture={handleFormSubmit}>
            <FormItem label="Title">
                <Input name="title" placeholder="Put title here" />
            </FormItem>
            <FormItem label="Content">
                <Input name="content" placeholder="Put Content here..." />
            </FormItem>
            <FormItem >
                <Button type="primary" htmlType="submit" onClick={props.hello}>Submit</Button>
            </FormItem>
        </Form>
    );
}

export default CustomForm;