import { beforeEach, jest, test } from "@jest/globals";

jest.mock('laravel-jetstream')

import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import { InertiaApp } from '@inertiajs/inertia-vue'
import { InertiaForm } from 'laravel-jetstream'
import Availabilities from "@src/Components/Availabilities";

let localVue
let wrapper

beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(InertiaApp)
    localVue.use(InertiaForm)

    wrapper = shallowMount(Availabilities, {
        localVue, propsData: {
            rooms: [{
                id: 1,
                name: "name",
                building: "building",
                number: "1",
                floor: 1,
                status: "available",
                room_type: "Mezzanine",
                availabilities: [
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Monday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Tuesday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Wednesday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Thursday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Friday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Saturday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Sunday"
                    }
                ],
            }]
        }, data() {
            return {
                availabilities: [
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Monday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Tuesday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Wednesday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Thursday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Friday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Saturday"
                    },
                    {
                        "opening_hours": "09:18:00",
                        "closing_hours": "21:19:00",
                        "weekday": "Sunday"
                    }
                ]
            }
        }
    })
});

test('should format date correctly', () => {
    expect(wrapper.vm.formatAvailability('07:50:15')).toBe('07:50');
})
