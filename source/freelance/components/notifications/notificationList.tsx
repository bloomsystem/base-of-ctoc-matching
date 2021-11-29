import { Notification } from "@prisma/client";
import * as React from "react";
import { useQuery } from "react-query";
import { LoaderPart } from "../parts/loaderPart";

export const NotificationList = () => {

    const { data: notifications, isLoading } = useQuery<Notification[]>("notifications", async () => {
        const res = await fetch("/api/notifications")
        return res.json()
    })

    if(isLoading) return <LoaderPart isLoading={isLoading}/>

    if (!notifications?.length || undefined) return (
            <div className="md:flex md:space-x-4 my-2">
                <div className="bg-white shadow appearance-none border rounded w-full flex-1 p-4 mb-2">
                    <ul>
                        <li>no notifications</li>
                    </ul>
                </div>
            </div>
    )

    return (
        <div className="md:flex md:space-x-4 my-2">
            <div className="bg-white shadow appearance-none border w-full flex-1 p-4 rounded mb-2">
                <ul>
                    {notifications.map((notification) => (
                        <li key={notification.id}>
                        <h2>{notification.title}</h2>
                        <span>{notification.body}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}