export class Group {
    id :number;
    name : string;
    description : string;
    group_image : string;
    organizations : string;
    project_groups : any;
    users : {};

    component( 
        id :number,
        name: string,
        description: string,
        group_image: string,
        organizations: string,
        project_groups:any,
        users: {},
    )
    {
        this.id = id;
        this.name = name;
        this.description = description;
        this.group_image = group_image;
        this. organizations = organizations;
        this.project_groups = project_groups;
        this.users = users;
    }
}