import { useEffect } from "react";
import { hubSpotFormCreate } from '@lib/hubspot';

export function HubSpotForm({ formDetail }) {
    useEffect(() => {
        hubSpotFormCreate(formDetail)
    }, [formDetail])

    return (
        <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <div className="form pb-4"></div>
            </div>
        </div>
    )
}