import React from "react";
import EmojiPicker from "emoji-picker-react";
import {useFormContext} from "react-hook-form";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";


export default function EmojiSelect() {

    const form = useFormContext();

    return (<FormField
        control={form.control}
        name="emoji"
        render={({ field }) => (
            <FormItem>
                <FormLabel>Emoji</FormLabel>
                <FormControl>
                    <div className="flex items-center gap-2">
                        {/* Input triggers the picker */}
                        <Popover>
                            <PopoverTrigger asChild>
                                <Input
                                    readOnly
                                    placeholder="Select an emoji"
                                    value={field.value ?? ""}
                                    className="w-[80px] cursor-pointer"
                                />
                            </PopoverTrigger>
                            <PopoverContent className="p-0">
                                <div className="flex flex-col items-center">
                                    <EmojiPicker
                                        onEmojiClick={(emojiData) => {
                                            field.onChange(emojiData.emoji);
                                        }}
                                    />

                                </div>
                            </PopoverContent>
                        </Popover>
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => field.onChange("")}
                        >
                            Clear
                        </Button>
                    </div>
                </FormControl>
                <FormMessage />
            </FormItem>
        )}
    />)
}




