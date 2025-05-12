import React from 'react';
import { faker } from '@faker-js/faker';
import FormContainer from '@/components/form/FormContainer';
import FormInput from '@/components/form/FormInput';
import { createProductAction } from '@/utils/action';
import PriceInput from '@/components/form/PriceInput';
import ImageInput from '@/components/form/ImageInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CheckBoxInput from '@/components/form/CheckBoxInput';
import SubmitButton from '@/components/form/Button';

async function CreateProductPage() {
    const name = faker.commerce.productName();
    const company = faker.company.name();
    const description = faker.lorem.paragraph({ min: 10, max: 12 });
    return (
        <section>
            <h1 className="text-2xl font-semibold mb-8 capitalize">
                create product
            </h1>
            <div className="border p-8 rounded-md">
                <FormContainer action={createProductAction}>
                    <div className="grid gap-4 md:grid-cols-2 my-4">
                        <FormInput
                            type="text"
                            name="name"
                            label="product name"
                            defaultValue={name}
                        />
                        <FormInput
                            type="text"
                            name="company"
                            label="company name"
                            defaultValue={company}
                        />
                        <PriceInput />
                        <ImageInput />
                        <div className="md:col-span-2">
                            <TextAreaInput
                                labelText="product Description"
                                name="productDescription"
                                defaultValue={description}
                            />
                            <CheckBoxInput label="featured" name="featured" />
                            <SubmitButton
                                size="lg"
                                text="create product"
                                className="mt-8 justify-start"
                            />
                        </div>
                    </div>
                </FormContainer>
            </div>
        </section>
    );
}

export default CreateProductPage;
