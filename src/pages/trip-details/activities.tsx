import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CircleCheck } from "lucide-react";



interface Activity {
    date: string;
    activities: {
        id: string;
        title: string;
        occurs_at: string;
    }[]
}

export const Activities = () => {
    const { tripId } = useParams()
    const [activities, setActivities] = useState<Activity[]>([]);
    console.log(activities)

    useEffect(() => {
        api.get(`trips/${tripId}/activities`).then(response => setActivities(response.data.activities))
      }, [tripId])

    return (

        <div className="space-y-8">
            {activities.map(category => {
                return (
                    <div key={category.date} className="space-y-2.5">
                        <div className="flex gap-2 items-baseline">
                            <span className="text-zinc-300 text-xl font-semibold">Dia {format(category.date, 'd')}</span>
                            <span className="text-zinc-500 text-xs">{format(category.date, 'EEE', { locale: ptBR })}</span>
                        </div>
                        {category.activities.length > 0 ? (
                            <div className="space-y-2.5">
                                {category.activities.map(activity => {
                                    return (
                                        <div className="space-y-2.5">
                                            <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
                                                <div className="flex gap-3 items-center">
                                                    <CircleCheck className="size-5 text-lime-300" />
                                                    <span className="text-zinc-100">{activity.title}</span>
                                                </div>
                                                <span className="text-zinc-400 text-sm">{format(activity.occurs_at, 'HH:mm')}h</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <p className="text-zinc-500 text-sm">Nenhuma atividade cadastrada nessa data.</p>
                        )}
                    </div>
                )
            })}


            {/* <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                    <span className="text-zinc-300 text-xl font-semibold">Dia 20</span>
                    <span className="text-zinc-500 text-xs">Domingo</span>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Academia em grupo</span>
                            -2.      </div>
                        <span className="text-zinc-400 text-sm">08:00h</span>
                    </div>
                </div>
                <div className="space-y-2.5">
                    <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <CircleCheck className="size-5 text-lime-300" />
                            <span className="text-zinc-100">Academia em grupo</span>
                        </div>
                        <span className="text-zinc-400 text-sm">08:00h</span>
                    </div>
                </div>
            </div> */}
        </div>
    )
}