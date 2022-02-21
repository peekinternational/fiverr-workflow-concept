<template>
  <div class="content">
    <base-nav title="Fiverr"></base-nav>

    <section class="container sy-1">
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
        <div class="col">
          <div class="card-columns">
            <card-column title="New Orders">
              <task-card  v-bind:newTasks="newTasks" v-for="(task, index) in newTasks" :key="task.id" @remove="removeTask(index)">
                <template slot="image">
                  <img src="../assets/img/card-01.jpg" alt="Project Thumbnail">
                </template>
                <template slot="info">
                  <span class="badge badge-warning">{{ task.badge }}</span>
                  <p class="card-info-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-clock">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ task.title }}
                  </p>
                  <p>
                    <span class="card-hours">{{ task.hours }} hrs</span>
                    <span><b>${{ task.amount }}</b></span>
                  </p>
                </template>
                <template slot="footer">
                  <a href="javascript:void(0)" class="nav-styled-link">View Order</a>
                  <span class="avatar-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                      </path>
                    </svg>
                    <div class="avatar-sm">
                      <img src="../assets/img/avatar-02.jpg" class="avatar-img" alt="User Avatar">
                    </div>
                  </span>
                </template>
              </task-card>
            </card-column>
          </div>
        </div>
        <div class="col">
          <div class="card-columns">
            <card-column title="In Progress">
              <task-card  v-bind:progressTasks="progressTasks" v-for="(task, index) in progressTasks" :key="task.id" @remove="removeProgressTask(index)">
                <template slot="image">
                  <img src="../assets/img/card-01.jpg" alt="Project Thumbnail">
                </template>
                <template slot="info">
                  <span class="badge badge-info">{{ task.badge }}</span>
                  <p class="card-info-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-clock">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ task.title }}
                  </p>
                  <p>
                    <span class="card-hours">{{ task.hours }} hrs</span>
                    <span><b>${{ task.amount }}</b></span>
                  </p>
                </template>
                <template slot="footer">
                  <a href="javascript:void(0)" class="nav-styled-link">View Order</a>
                  <span class="avatar-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                      </path>
                    </svg>
                    <div class="avatar-sm">
                      <img src="../assets/img/avatar-02.jpg" class="avatar-img" alt="User Avatar">
                    </div>
                  </span>
                </template>
              </task-card>
            </card-column>
          </div>
        </div>
        <div class="col">
          <div class="card-columns">
            <card-column title="Waiting For Buyer">
              <task-card  v-bind:deliveredTasks="deliveredTasks" v-for="(task, index) in deliveredTasks" :key="task.id" @remove="removeDeliveredTask(index)">
                <template slot="image">
                  <img src="../assets/img/card-01.jpg" alt="Project Thumbnail">
                </template>
                <template slot="info">
                  <span class="badge badge-danger">{{ task.badge }}</span>
                  <p class="card-info-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-clock">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ task.title }}
                  </p>
                  <p>
                    <span class="card-hours">{{ task.hours }} hrs</span>
                    <span><b>${{ task.amount }}</b></span>
                  </p>
                </template>
                <template slot="footer">
                  <a href="javascript:void(0)" class="nav-styled-link">View Order</a>
                  <span class="avatar-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                      </path>
                    </svg>
                    <div class="avatar-sm">
                      <img src="../assets/img/avatar-02.jpg" class="avatar-img" alt="User Avatar">
                    </div>
                  </span>
                </template>
              </task-card>
            </card-column>
          </div>
        </div>
        <div class="col">
          <div class="card-columns">
            <card-column title="Completed">
              <task-card  v-bind:CompletedTasks="CompletedTasks" v-for="(task, index) in CompletedTasks" :key="task.id" @remove="removeCompletedTask(index)">
                <template slot="image">
                  <img src="../assets/img/card-01.jpg" alt="Project Thumbnail">
                </template>
                <template slot="info">
                  <span class="badge badge-success">{{ task.badge }}</span>
                  <p class="card-info-title">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather-clock">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {{ task.title }}
                  </p>
                  <p>
                    <span class="card-hours">{{ task.hours }} hrs</span>
                    <span><b>${{ task.amount }}</b></span>
                  </p>
                </template>
                <template slot="footer">
                  <a href="javascript:void(0)" class="nav-styled-link">View Order</a>
                  <span class="avatar-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                      </path>
                    </svg>
                    <div class="avatar-sm">
                      <img src="../assets/img/avatar-02.jpg" class="avatar-img" alt="User Avatar">
                    </div>
                  </span>
                </template>
              </task-card>
            </card-column>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CardColumn from "./Dashboard/CardColumn";
import TaskCard from "./Dashboard/TaskCard";
import BaseNav from "../components/BaseNav.vue";

export default {
  components: {
    CardColumn,
    TaskCard,
    BaseNav
  },
  data() {
    return {
      newTasks: [
        {
          id: 1,
          badge: "New Order",
          title: "5 days left",
          hours: 20,
          amount: 320
        },
        {
          id: 2,
          badge: "New Order",
          title: "3 days left",
          hours: 4,
          amount: 85
        }
      ],
      progressTasks: [
        {
          id: 1,
          badge: "In Progress",
          title: "Due in 2 days",
          hours: 20,
          amount: 155
        },
        {
          id: 2,
          badge: "In Progress",
          title: "Due in 3 days",
          hours: 4,
          amount: 385
        }
      ],
      deliveredTasks: [
        {
          id: 1,
          badge: "Delivered",
          title: "3 days left",
          hours: 3,
          amount: 385
        }
      ],
      CompletedTasks: [
        {
          id: 1,
          badge: "Completed",
          title: "Dec 12, 9:43PM",
          amount: 346
        },
        {
          id: 2,
          badge: "Completed",
          title: "Dec 13, 8:43PM",
          amount: 320
        },
        {
          id: 3,
          badge: "Completed",
          title: "Dec 14, 7:43PM",
          amount: 355
        }
      ]
    }
  },
  methods: {
    removeTask(index) {
      this.newTasks.splice(index, 1);
    },
    removeProgressTask(index) {
      this.progressTasks.splice(index, 1);
    },
    removeDeliveredTask(index) {
      this.deliveredTasks.splice(index, 1);
    },
    removeCompletedTask(index) {
      this.CompletedTasks.splice(index, 1);
    }
  }
};
</script>

<style></style>
