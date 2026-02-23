/**
 * Custom modules
 */
import { openWeatherApi } from "@/api";
import { APP, WEATHER_API } from "@/config/index";

/**
 * Hooks
 */
import { useEffect, useCallback, useState } from "react";

/**
 * Compenents
 */
import { Dialog, DialogTrigger, DialogContent,
     DialogHeader, DialogTitle, DialogClose, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemGroup } from "@/components/ui/item";

/**
 * Assets
 */
import { MapPinnedIcon, SearchIcon } from "lucide-react" 

/**
 * Types
 */
import type { Geocoding } from "@/types/index";

export const SearchDialog = () =>{
     return <div>Search dialog</div>
}