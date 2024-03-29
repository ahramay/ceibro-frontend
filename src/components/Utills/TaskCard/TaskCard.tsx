import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Badge, Grid, Typography } from "@material-ui/core";
import colors from "../../../assets/colors";
import {
  getColorByStatus,
  getTextColorByStatus,
} from "../../../config/project.config";

import { TaskCardInterface } from "../../../constants/interfaces/task.interface";
import assets from "assets/assets";
import { getStyleClass } from "config/styles.config";
import TaskBadges from "./TaskBadges";

const TaskCard: FC<TaskCardInterface> = (props) => {
  const { task } = props;
  const {
    dueDate,
    owner,
    title,
    subTasks,
    docs,
    chat,
    status,
    assignedTo,
    members,
  } = task;
  const classes = useStyles();

  return (
    <Grid
      className={classes.cardOuterWrapper}
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
    >
      <Grid
        item
        xs={12}
        className={classes.cardWrapper}
        style={{ borderColor: getColorByStatus(status) }}
      >
        <Grid item xs={12} className={classes.imageWrapper}>
          <div className={classes.tagWrapper}>
            <div
              className={classes.status}
              style={{
                background: getColorByStatus(status),
                color: getTextColorByStatus(status),
              }}
            >
              <Typography className={classes.statusText}>{status}</Typography>
            </div>
            <div className={classes.dateWrapper}>
              <Typography className={classes.statusDate}>{dueDate}</Typography>
            </div>
          </div>
        </Grid>
        <Grid container className={classes.secondSection}>
          <Grid item xs={5}>
            <Typography className={classes.meta}>Task Due date</Typography>
            <Typography className={classes.metaValue}>{dueDate}</Typography>
          </Grid>
          <Grid
            item
            xs={7}
            className={`${classes.assignedToWrapper} ${getStyleClass(
              "ongoing"
            )}`}
          >
            <div>
              <Typography className={classes.meta}>AssignedTo</Typography>
              <Typography className={classes.metaValue}>
                {assignedTo}
              </Typography>
            </div>
            {members > 1 && (
              <Badge
                // className={classes.statusBage}
                color="primary"
                badgeContent={`+${members - 1}`}
              ></Badge>
            )}
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.title}>{title}</Typography>
        </Grid>

        <Grid item xs={12} className={classes.iconWrapper}>
          <div className={classes.iconChip} style={{ flex: 2, paddingLeft: 0 }}>
            <img src={assets.clipboardIcon} className="width-16" alt="ceibro" />
            <Typography style={{ paddingLeft: 5 }} className={classes.iconText}>
              {subTasks} subtask(s)
            </Typography>
          </div>
          {/* 
          <div className={classes.iconChip}>
            <img src={assets.clip} alt="ceibro" />
            <Typography className={classes.iconText}>{docs}</Typography>
          </div> */}

          <div className={classes.iconChip}>
            <img className={`width-16`} src={assets.chatIcon} alt="ceibro" />
            <Typography className={classes.iconText}>{chat}</Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", gap: 25, paddingLeft: 10 }}
        >
          <TaskBadges />
        </Grid>

        <hr className={classes.break} />

        <Grid item xs={12} className={classes.lastSection}>
          <Typography className={classes.owner}>{owner}</Typography>
          <Typography className={classes.viewMap}>View map</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskCard;

const useStyles = makeStyles({
  cardOuterWrapper: {
    padding: 5,
  },
  cardWrapper: {
    height: 220,
    padding: 15,
    paddingTop: 5,
    paddingLeft: 10,
    background: colors.white,
    border: `1px solid`,
    boxSizing: "border-box",
    borderRadius: 5,
  },
  imageWrapper: {
    position: "relative",
  },
  tagWrapper: {
    position: "absolute",
    background: colors.white,
    top: 10,
    left: 5,
    borderRadius: 3,
    display: "flex",
    height: 20,
  },
  status: {
    background: colors.darkYellow,
    borderRadius: 3,
    paddingLeft: 5,
    paddingRight: 10,
    marginLeft: "-4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 500,
  },
  statusDate: {
    color: colors.black,
    fontWeight: 500,
    fontSize: 10,
  },
  dateWrapper: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 5,
    paddingRight: 10,
  },
  myImage: {
    width: "100%",
    height: 100,
    borderRadius: 4,
  },
  meta: {
    fontWeight: 500,
    fontSize: 10,
    color: colors.textGrey,
  },
  metaValue: {
    fontWeight: 500,
    fontSize: 12,
  },
  title: {
    fontWeight: 500,
    fontSize: 14,
    marginTop: 10,
    color: colors.textPrimary,
  },
  viewMap: {
    color: colors.primary,
    fontWeight: 500,
    fontSize: 12,
  },
  break: {
    border: 0,
    borderTop: `1px solid ${colors.grey}`,
  },
  iconWrapper: {
    display: "flex",
    aligItems: "center",
    justifyContent: "space-between",
    minHeight: 40,
  },
  iconChip: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    fontWeight: 500,
    fontSize: 10,
    paddingLeft: 5,
  },
  icon: {
    color: colors.primary,
    paddingRight: 3,
    fontSize: 12,
  },
  iconText: {
    fontSize: 10,
    fontWeight: 500,
  },
  secondSection: {
    marginTop: 40,
  },
  lastSection: {
    display: "flex",
    justifyContent: "space-between",
  },
  owner: {
    fontSize: 12,
    fontWeight: "bold",
  },
  assignedToWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
