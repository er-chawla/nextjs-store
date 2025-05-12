import React from 'react';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

type TextAreaInputProps = {
    name: string;
    defaultValue?: string;
    labelText?: string;
};

function TextAreaInput({ name, defaultValue, labelText }: TextAreaInputProps) {
    return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">
                {labelText || name}
            </Label>
            <Textarea
                id={name}
                name={name}
                defaultValue={defaultValue}
                rows={5}
                required
                className="leading-loose"
            />
        </div>
    );
}

export default TextAreaInput;
