import React from "react";
import {FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form";
import {useFormContext} from "react-hook-form";
import {Textarea} from "@/components/ui/textarea";


export default function DescriptionField() {
    const form = useFormContext();

    return (<FormField
        control={form.control}
        name="description"
        render={({field}) => (
            <FormItem>
                <FormControl>
                    <Textarea placeholder="description" {...field} />
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}
    />)
}