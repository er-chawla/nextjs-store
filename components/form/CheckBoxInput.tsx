import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';

type CheckBoxInputProp = {
    name: string;
    label: string;
    defaultChecked?: boolean;
};

function CheckBoxInput({ name, label, defaultChecked }: CheckBoxInputProp) {
    return (
        <div className="flex items-center space-x-2">
            <Checkbox defaultChecked={defaultChecked} name={name} id={name} />
            <Label
                htmlFor={name}
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
            >
                {label}
            </Label>
        </div>
    );
}

export default CheckBoxInput;
