create table events(
	Id int AUTO_INCREMENT PRIMARY key not null,
    UserId varchar (50)not null,
    Title varchar (100)not null,
    Description varchar (500) null,
    StartDate date not null,
    StartTime time not null,
    EndDate date null,
    EndTime time null,
    Index idx_events_userId(UserId)
)
insert into EVENTS (UserId, title, description, StartDate, StartTime, EndDate, EndTime)
VALUES ('Dubrov', 'Proposition train','Dispo toute la journee','2022/11/16',19:00:00,null, 23:00:00);