import React from "react";
import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useFormContext} from "react-hook-form";


export default function NameField() {
    const form = useFormContext();

    return (<FormField
        control={form.control}
        name="name"
        render={({field}) => (
            <FormItem>
                <FormControl>
                    <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />)
}