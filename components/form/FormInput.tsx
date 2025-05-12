import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type FormTypeInputProps = {
    name: string;
    type: string;
    defaultValue?: string;
    placeHolder?: string;
    label?: string;
};

function FormInput({
    name,
    type,
    defaultValue,
    placeHolder,
    label,
}: FormTypeInputProps) {
    return (
        <div className="mt-2">
            <Label htmlFor={name} className="capitalize">
                {label || name}
            </Label>
            <Input
                name={name}
                defaultValue={defaultValue}
                placeholder={placeHolder}
                type={type}
                id={name}
                required
            />
        </div>
    );
}

export default FormInput;
